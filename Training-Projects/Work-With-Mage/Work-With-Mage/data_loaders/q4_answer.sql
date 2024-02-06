/**
For the passengers picked up in September 2019 in the zone name Astoria which was the drop off zone that had the largest tip? We want the name of the zone, not the id.

Note: it's not a typo, it's tip , not trip

Central Park
Jamaica
JFK Airport
Long Island City/Queens Plaza
select * From ny_taxi.zone

**/
select z_do._zone,
 Max(t.tip_amount) as Maxtip_amount
from ny_taxi.yellow_taxi_data t
join ny_taxi.zone z_pu
on t."pulocationid" = z_pu."locationid"
join ny_taxi.zone z_do
on t."dolocationid" = z_do."locationid"

WHERE 
Z_pu._zone = 'Astoria'
 group by 1
 Having Max(t.tip_amount)  >1
