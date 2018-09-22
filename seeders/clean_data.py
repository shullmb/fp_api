import os, fnmatch
import pandas as pd
import numpy as np

file_ext = '*.txt'
dataframes = []
output = pd.DataFrame()

for root, dirs, files in os.walk('./data'):
    for filename in files:
        if fnmatch.fnmatch(filename, file_ext):
            dataframes.append(pd.read_fwf('./data/' + filename, names=['Station', filename], dtype=str, header=None, sep='\s+'))

for i in range(0,len(dataframes) - 1):
    output = pd.merge(dataframes[i],dataframes[i+1], on='Station', how='outer')

zipcodes = pd.read_fwf('./data/zipcodes-normals-stations.txt', names=['Station', 'Zip','Location'],dtype=str, sep='\s+', header=None)

output.merge(zipcodes, on='Station')
output.to_csv('./data/output.csv', index=False)
