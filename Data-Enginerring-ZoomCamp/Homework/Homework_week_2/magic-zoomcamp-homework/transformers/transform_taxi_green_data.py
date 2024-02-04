if 'transformer' not in globals():
    from mage_ai.data_preparation.decorators import transformer
if 'test' not in globals():
    from mage_ai.data_preparation.decorators import test


@transformer
def transform(final_quarter_data, *args, **kwargs):
    #create a new column 'lpep_pickup_date' as date
    final_quarter_data['lpep_pickup_date'] = final_quarter_data['lpep_pickup_datetime'].dt.date
     # Rename columns in Camel Case to Snake Case
    Snake_final_quarter_data = final_quarter_data.rename(columns={
        'VendorID': 'vendor_id',
        'passenger_count': 'passenger_count',
        'trip_distance': 'trip_distance',
        'RatecodeID': 'rate_code_id',
        'store_and_fwd_flag': 'store_and_fwd_flag',
        'PuLocationID': 'pu_location_id',
        'DOLocationID': 'do_location_id',
        'payment_type': 'payment_type',
        'fare_amount': 'fare_amount',
        'extra': 'extra',
        'mta_tax': 'mta_tax',
        'tip_amount': 'tip_amount',
        'tolls_amount': 'tolls_amount',
        'improvement_surcharge': 'improvement_surcharge',
        'total_amount': 'total_amount',
        'congestion_surcharge': 'congestion_surcharge',
        'lpep_pickup_datetime': 'lpep_pickup_datetime',
        'lpep_dropoff_datetime': 'lpep_dropoff_datetime'
    })
    return Snake_final_quarter_data[(Snake_final_quarter_data['passenger_count'] > 0) & (Snake_final_quarter_data['trip_distance'] > 0)]

@test
def test_output(output, *args):
    assert (output['passenger_count'] == 0).sum() == 0, 'There are rides with zero passengers'
    assert (output['trip_distance'] == 0).sum() == 0, 'There are rides with zero trip distance'
