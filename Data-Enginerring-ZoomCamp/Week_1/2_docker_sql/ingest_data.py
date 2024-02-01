#!/usr/bin/env python
# coding: utf-8

import argparse
import requests
import pandas as pd
from sqlalchemy import create_engine
from time import time
import pyarrow.parquet as pq  # Consider removing if not used

def main(params):
    user = params.user
    password = params.password
    host = params.host
    port = params.port
    db = params.db
    table_name = params.table_name
    url = params.url

    # URL of the Parquet file
    parquet_url = url

    # Download the Parquet file
    parquet_file = 'yellow_tripdata_2021-01.parquet'
    response = requests.get(parquet_url)
    with open(parquet_file, 'wb') as f:
        f.write(response.content)

    # Read the Parquet file into a Pandas DataFrame
    parquet_df = pq.read_table(parquet_file).to_pandas()

    # Specify the path for the CSV file
    csv_name = 'output.csv'

    # Convert the DataFrame to CSV
    parquet_df.to_csv(csv_name, index=False)
    print(f'Conversion completed. CSV file saved to: {csv_name}')

    # Start engine
    engine = create_engine(f'postgresql://{user}:{password}@{host}:{port}/{db}')
    df_iter = pd.read_csv(csv_name, iterator=True, chunksize=100000)
    df = next(df_iter)
    df.tpep_pickup_datetime = pd.to_datetime(df.tpep_pickup_datetime)
    df.tpep_dropoff_datetime = pd.to_datetime(df.tpep_dropoff_datetime)
    df.head(n=0).to_sql(name=table_name, con=engine, if_exists='replace')
    df.to_sql(name=table_name, con=engine, if_exists='append')

    while True:
        t_start = time()
        df = next(df_iter)
        df.tpep_pickup_datetime = pd.to_datetime(df.tpep_pickup_datetime)
        df.tpep_dropoff_datetime = pd.to_datetime(df.tpep_dropoff_datetime)
        df.to_sql(name=table_name, con=engine, if_exists='append')
        t_end = time()
        print('Inserted another chunk, took %.3f seconds' % (t_end - t_start))

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Ingest CSV data to Postgres')

    parser.add_argument('--user', required=True, help='User name for postgres')
    parser.add_argument('--password', required=True, help='Password for postgres')
    parser.add_argument('--host', required=True, help='Host for postgres')
    parser.add_argument('--port', required=True, help='Port for postgres')
    parser.add_argument('--db', required=True, help='Database name for postgres')
    parser.add_argument('--table_name', required=True, help='Name of the table where we will write the results to')
    parser.add_argument('--url', required=True, help='URL of the csv file')
    args = parser.parse_args()
    main(args)
