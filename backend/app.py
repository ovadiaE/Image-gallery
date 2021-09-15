import os
import requests
from dotenv import load_dotenv
from flask import Flask, request
load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random/"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY","")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("Please add Unsplash Key to .env.local")


app = Flask(__name__)
app.config["DEBUG"] = True

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    params = {"query": word}
    response = requests.get("https://api.unsplash.com/photos/random/?query={}&client_id={}".format(word,UNSPLASH_KEY))
    print(response.url)
    data = response.json()
    return(data)
    
if __name__ == "__main__":
       app.run(host="0.0.0.0", port=5050)
