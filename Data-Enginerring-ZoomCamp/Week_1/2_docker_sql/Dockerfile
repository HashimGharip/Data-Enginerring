# Use the official Python 3.9 image as the base image
FROM python:3.9

RUN apt-get install wget 
RUN pip install requests
RUN pip install pyarrow

# Install pandas using pip
# psycopg2 -> its lib to access postgres throw Python 
RUN pip install pandas sqlalchemy psycopg2 
# this is will be the location in the image in the container where we will copy the file :
# Set the working directory in the container
WORKDIR /app

# Copy the pipeline.py file into the container at /app
COPY ingest_data_Homework.py  /app/ingest_data_Homework.py
# Set the default command to run when the container starts
ENTRYPOINT [ "python","ingest_data_Homework.py" ]
#ENTRYPOINT [ "bash" ]

#Docker commands:
###Home work :
#   docker build -t taxi_ingest2:v001 .

#  URL="https://d37ci6vzurychx.cloudfront.net/trip-data/green_tripdata_2019-09.parquet"

#  docker run -it \
#  --network=pg-network  \
#  taxi_ingest2:v001 \
#  --user=postgres \
#  --password=g2kadmin \
#  --host=pg-database2 \
#  --port=5432 \
#  --db=ny_taxi \
#  --table_name=green_taxi_trips \
#  --url=${URL}