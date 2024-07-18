import json
from flask import Blueprint, request
# from run import chat_engine
import google.generativeai as genai
import os
from run import gemeni_api_key

genai.configure(api_key=gemeni_api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return json.dumps({"message": "Hello, World!"})	

@main_bp.route('/query', methods=['GET'])
def query():
    # get query
    query = request.args.get('query')
    
    prompt = "Answer like a professional and caring admiral nurse to the following question: " + query
    
    # fetch response
    response = model.generate_content(prompt)

    # extract the generated content from the response
    generated_content = response.text

    # return the generated content as the response
    return json.dumps({"response": generated_content})