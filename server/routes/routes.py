import json
from flask import Blueprint, request
# from run import chat_engine
import google.generativeai as genai
import os
from run import gemeni_api_key
from run import faiss_index
from langchain.chains import RetrievalQA
from langchain_community.document_loaders import WebBaseLoader
from langchain_core.prompts import PromptTemplate
from langchain_google_vertexai import VertexAIEmbeddings, VertexAI
from dotenv import load_dotenv
import os
import google.generativeai as genai
from run import app


genai.configure(api_key=gemeni_api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

main_bp = Blueprint('main', __name__)



def get_response_llm(query):
    prompt_template = """
    Human: Answer the question as detailed as possible from the provided context, make sure to provide all the details, humanize the response. 
    You can provide links as well. Use you external knowledge to make it effective. These questions are for dementia patients, If you don't know the answer,use your knowledge of alzheimer's and 
    dementia, and also from Dementia UK website.\n
    
    Context:\n {context}?\n
    Question: {question}
    
    Assistant:
    """
    prompt = PromptTemplate(template=prompt_template, input_variables=['context', 'question'])

    qa = RetrievalQA.from_chain_type(
        llm=model,
        retriever=faiss_index.as_retriever(
            search_type="similarity", search_kwargs={"k": 3}
        ),
        chain_type="stuff",
        return_source_documents=True,
        chain_type_kwargs={"prompt": prompt}

    )
    answer = qa({"query": query})

    formatted_answer = answer['result'].split('\n\n')
    source_values = [doc.metadata.get('source') for doc in answer['source_documents']]

    return formatted_answer, source_values 

# @app.route('/')
# def index():
#     return json.dumps({"message": "Hello, World!"})	

# @app.route('/query', methods=['GET'])
# def query():
#     # get query
#     query = request.args.get('query')
    
#     prompt = "Answer like a professional and caring admiral nurse to the following question: " + query
    
#     # fetch response
#     response = model.generate_content(prompt)

#     # extract the generated content from the response
#     generated_content = response.text

#     # return the generated content as the response
#     return json.dumps({"response": generated_content})


# @app.route('/personalised-query', methods=['GET'])
# def query():
#     # get query
#     query = request.args.get('query')
    
#     # fetch response
#     response, links = get_response_llm(query)

#     # extract the generated content from the response
   

#     # return the generated content as the response
#     return json.dumps({"response": response, "links": links})