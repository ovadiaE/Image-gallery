import os
import requests
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS
from werkzeug import datastructures
load_dotenv(dotenv_path="./.env.local")
UNSPLASH_URL = "https://api.unsplash.com/photos/random/"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY","")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("Please add Unsplash Key to .env.local")


app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route("/new-user", methods=['POST'])
def new_user():
    if request.method == 'POST':
        data = request.get_json()
        for i in data:
            print(data[i])
        return(data)


@app.route("/login", methods=['POST'])
def login_user():
    if request.method == 'POST':
        data = request.data
        print(data)
        return(data)


@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    response = requests.get("https://api.unsplash.com/photos/random/?query={}&client_id={}".format(word,UNSPLASH_KEY))
    print(response.url)
    data = response.json()
    return(data)

if __name__ == "__main__":
       app.run(host="0.0.0.0", port=5050)
