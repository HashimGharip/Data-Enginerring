/**
Which was the pick up day with the longest trip distance? Use the pick up time for your calculations.

Tip: For every trip on a single day, we only care about the trip with the longest distance.

2019-09-18
2019-09-16
2019-09-26
2019-09-21

**/

Select tpep_pickup_datetime , tpep_dropoff_datetime
From  ny_taxi.yellow_taxi_data
Order by trip_distance LIMIT 1