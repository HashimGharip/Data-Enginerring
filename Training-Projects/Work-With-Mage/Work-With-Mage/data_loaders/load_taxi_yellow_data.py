import io
import pandas as pd
import requests
if 'data_loader' not in globals():
    from mage_ai.data_preparation.decorators import data_loader
if 'test' not in globals():
    from mage_ai.data_preparation.decorators import test


@data_loader
def load_data_from_api(*args, **kwargs):
    """
    Template for loading data from API
    """
    url = 'https://github.com/DataTalksClub/nyc-tlc-data/releases/download/yellow/yellow_tripdata_2021-01.csv.gz'
    """
    we define data types for  all columns before to reduce the useage of CPU and Memory process.
    pandas can do that but it will take time and CPU and Memory efforts.
    """
    taxi_dtypes = {
                    'VendorID': pd.Int64Dtype(),
                    'passenger_count': pd.Int64Dtype(),
                    'trip_distance': float,
                    'RatecodeID': pd. Int64Dtype(),
                    'store_and_fwd_flag':str,
                    'PuLocationID':pd.Int64Dtype(),
                    'DOLocationID' :pd.Int64Dtype(),
                    'payment_type': pd. Int64Dtype(),
                    'fare_amount': float,
                    'extra':float,
                    'mta_tax' :float,
                    'tip_amount':float,
                    'tolls_amount': float,
                    'improvement_surcharge': float,
                    'total _anount': float,
                    'congestion surcharge' :float
                  }
    parse_dates=['tpep_pickup_datetime','tpep_dropoff_datetime']
    return pd.read_csv(url, sep=',', compression='gzip',dtype=taxi_dtypes,parse_dates=parse_dates)
@test
def test_output(output, *args) -> None:
    """
    Template code for testing the output of the block.
    """
    assert output is not None, 'The output is undefined'
