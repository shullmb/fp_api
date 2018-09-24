import os, fnmatch
import pandas as pd
import numpy as np

file_ext = 'ann-*.txt'
dataframes = []
output = None
zipcodes = pd.read_fwf('./data/zipcodes-normals-stations.txt', names=['Station', 'Zip','Location'],dtype=str, sep='\s+', header=None)

for root, dirs, files in os.walk('./data'):
    for filename in files:
        if fnmatch.fnmatch(filename, file_ext):
            colname = filename.replace('ann-tmin-','').replace('.txt','')
            dataframes.append(pd.read_fwf('./data/' + filename, names=['Station', colname], dtype=str, header=None, sep='\s+'))

for i in range(0,len(dataframes)):
    output = pd.merge(zipcodes, dataframes[i], on='Station', how='inner')
    zipcodes = output

zipcodes.to_csv('./data/output.csv', index=False)
