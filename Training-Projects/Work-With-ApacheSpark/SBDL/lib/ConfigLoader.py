import configparser
from pyspark import SparkConf

# Generated fun to load required  SBDL confs form SBDL.conf into python Dic to be loded only onse in the main method on the  meomry
# the env parm vlaues debands on where i will run the envirnment in case its local it will read confgs from [local] in sbdl.conf ,etc
def get_config(env):
    config = configparser.ConfigParser()
    config.read("conf/sbdl.conf")
    conf = {}
    for (key, val) in config.items(env):
        conf[key] = val
    return conf

#gentreadted fun to load spark confs in the 'spark_conf' object beacuse we used it only onse when we stratred spark seasion

def get_spark_conf(env):
    spark_conf = SparkConf()
    config = configparser.ConfigParser()
    config.read("conf/spark.conf")

    for (key, val) in config.items(env):
        spark_conf.set(key, val)
    return spark_conf

## Genereated fun to build where close at the run time
# when we retrive data from account table we need to filiter data where
# example  active_ind column = 1 --> account.filter = active_ind = 1
# go to Dataloader.py and expand read_accounts fun you will see reutime_filter object
def get_data_filter(env, data_filter):
    conf = get_config(env)
    return "true" if conf[data_filter] == "" else conf[data_filter]