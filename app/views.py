from app import app
from flask import render_template, url_for, redirect, request, flash
from app import scraper as sc
from app import analyzer as an
import json


@app.route('/')
def home():
    return render_template("base.html")




@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':

        product_code = request.form.get("search")

       
        product_opinions = sc.product_opinions(product_code)
        an.analyzer()


        if product_opinions == "1":
           return render_template("staticsticspage.html", product_code=product_code)
        else:
            return redirect(url_for('home'))
                    


        
@app.route('/statistics', methods=['GET'])
def data():
    with open('./charts/data.json', 'r') as file:
        data = json.load(file)
    
    return data


@app.route('/product-opinions', methods=['GET'])
def opinions():
    with open('./opinions/product-opinions.json', 'r', encoding='utf-8') as fl:
        opinion = json.load(fl)
    
    return opinion