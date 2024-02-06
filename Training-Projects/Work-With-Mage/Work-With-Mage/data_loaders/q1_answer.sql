/** How many taxi trips were totally made on September 18th 2019?

Tip: started and finished on 2019-09-18.

Remember that lpep_pickup_datetime and lpep_dropoff_datetime columns are in the format timestamp (date and hour+min+sec) and not in date.

15767
15612
15859
89009
**/

Select Count(1) 
From ny_taxi.yellow_taxi_data
Where Date(tpep_pickup_datetime)= '2019-09-18'
And   Date(tpep_dropoff_datetime)= '2019-09-18'

