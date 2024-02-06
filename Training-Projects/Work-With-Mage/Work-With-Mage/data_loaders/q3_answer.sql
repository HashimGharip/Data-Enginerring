/**
Consider lpep_pickup_datetime in '2019-09-18' and ignoring Borough has Unknown

Which were the 3 pick up Boroughs that had a sum of total_amount superior to 50000?

"Brooklyn" "Manhattan" "Queens"
"Bronx" "Brooklyn" "Manhattan"
"Bronx" "Manhattan" "Queens"
"Brooklyn" "Queens" "Staten Island"
**/

SELECT 
    Borough,
    SUM(total_amount) AS total_amount_sum
FROM  
    ny_taxi.yellow_taxi_data
INNER JOIN 
    ny_taxi.Zone ON yellow_taxi_data.dolocationid = Zone.LocationID
WHERE 
    DATE(tpep_pickup_datetime) = '2019-09-18' AND
    Borough != 'Unknown'
GROUP BY 
Zone.Borough
Having SUM(total_amount) >5000

