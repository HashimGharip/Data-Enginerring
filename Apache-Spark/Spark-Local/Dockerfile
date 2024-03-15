# Use an official Python runtime as a parent image
FROM python:3.9

# Set environment variables
ENV PYSPARK_PYTHON=python3
ENV PYSPARK_DRIVER_PYTHON=python3

# Install Java and other dependencies
RUN apt-get update && \
    apt-get install -y default-jdk && \
    apt-get clean

# Install PySpark
RUN pip install pyspark

# Set working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Define default command to start PySpark shell
CMD ["pyspark"]

#commands:

#docker build -t pyspark .
#docker run -it pyspark
