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
    url = 'https://github.com/DataTalksClub/nyc-tlc-data/releases/download/green/green_tripdata_2021-01.csv.gz'
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

    parse_dates=['lpep_pickup_datetime','lpep_dropoff_datetime']
     # Initialize an empty list to store data frames
    data_frames = []

    # Load and concatenate data for the final three months of 2020
    for month in range(10, 13):
        url_template_per_month = url.format(month)
        data = pd.read_csv(url_template_per_month, sep=',', compression='gzip', dtype=taxi_dtypes, parse_dates=parse_dates)
        data_frames.append(data)

    # Concatenate data frames
    final_quarter_data = pd.concat(data_frames, ignore_index=True)

    return final_quarter_data




@test
def test_output(output, *args) -> None:
    """
    Template code for testing the output of the block.
    """
    assert output is not None, 'The output is undefined'
