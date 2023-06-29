import os
import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
import json



def analyzer():
    opinions = pd.read_json(f"./opinions/product-opinions.json")
    max_score  =5

    if not os.path.exists("./charts"):
        os.mkdir("./charts")

    recommendations = opinions["recommendation"].value_counts(dropna=False).reindex([True, False, np.nan], fill_value=0)
    recommendations = recommendations.to_list()
    

    opinions["stars"] = (opinions["score"]*max_score).round(1)

    stars = opinions.stars.value_counts().reindex(list(np.arange(0,5.5,0.5)), fill_value=0)
    score = stars.to_list()

    with open('./charts/data.json', 'w') as jf:
        json.dump([recommendations, score],jf, indent=4, ensure_ascii=False)
