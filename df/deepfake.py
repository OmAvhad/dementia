import requests
from flask import Flask, jsonify
from flask import request

app = Flask(__name__)

@app.route('/create-talk', methods=['POST'])
def deepfake():
    data = request.get_json()
    input = data.get('input')
    url = "https://api.d-id.com/talks"

    payload = {
                "script": {
                    "type": "text",
                    "subtitles": "false",
                    "provider": {
                    "type": "microsoft",
                    "voice_id": "en-US-JennyNeural"
                    },
                    "input": input
                },
                "config": {
                    "fluent": "false",
                    "pad_audio": "0.0"
                },
                "source_url": "https://womensagenda.com.au/wp-content/uploads/2021/03/yasmin_poole.png"
            }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Basic ZG9mb3dlbjE2NUB0aWVydmlvLmNvbQ:irbc__Idwai_gKObRhoH_"
    }

    response = requests.post(url, json=payload, headers=headers)

    return jsonify(response.json())

@app.route('/get-talk', methods=['GET'])
def get_deepfake():
    id = request.args.get('id')
    
    url = f"https://api.d-id.com/talks/{id}"
    
    headers = {
        "accept": "application/json",
        "authorization": "Basic ZG9mb3dlbjE2NUB0aWVydmlvLmNvbQ:irbc__Idwai_gKObRhoH_"
    }
    
    response = requests.get(url, headers=headers)
    
    return jsonify(response.json())
    
    
if __name__ == '__main__':
    # add cors
    from flask_cors import CORS
    CORS(app)
    app.run(debug=True) 