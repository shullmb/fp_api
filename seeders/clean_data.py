import os, fnmatch
import pandas as pd
import numpy as np

raw_list = []
file_ext = '*.txt'
dataframes = []
test = None

for root, dirs, files in os.walk('./data'):
    for filename in files:
        if fnmatch.fnmatch(filename, file_ext):
            raw_list.append(filename)
            dataframes.append(pd.read_fwf('./data/' + filename, dtype=str, header=None, sep='\s+'))

for i in range(0,len(dataframes)):
    test = pd.merge(dataframes[i],dataframes[i+1])

print(test)