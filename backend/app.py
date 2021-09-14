import requests
from flask import Flask, request

UNSPLASH_URL = "https://api.unsplash.com/photos/random/"
UNSPLASH_KEY =  "2yfY1om1BnxEGUlr4qwqqvU_avqkb1SjjBp-7dgstJ8"
                

app = Flask(__name__)


@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {"Authorization": "client-id" + UNSPLASH_KEY}
    print(UNSPLASH_KEY)
    params = {"query": word}
    response = requests.get(url=UNSPLASH_URL,headers=headers,params=params)
    print(response) 
    print(response.text)
    return(response.text)
    
if __name__ == "__main__":
       app.run(host="0.0.0.0", port=5050)
