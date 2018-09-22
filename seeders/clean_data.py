import os, fnmatch
import pandas as pd
import numpy as np

file_ext = '*.txt'
dataframes = []
test = pd.DataFrame()

for root, dirs, files in os.walk('./data'):
    for filename in files:
        if fnmatch.fnmatch(filename, file_ext):
            dataframes.append(pd.read_fwf('./data/' + filename, dtype=str, header=None, sep='\s+'))

for i in range(0,len(dataframes) - 1):
    test = pd.merge(dataframes[i],dataframes[i+1], on=0, how='outer')

test.to_csv('./data/output.csv')
