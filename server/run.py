# from langchain_huggingface import HuggingFaceEmbeddings
# from llama_index.embeddings.langchain import LangchainEmbedding
# from llama_index.llms.gemini import Gemini
# from llama_index.core.memory import ChatMemoryBuffer
# from llama_utils.index import get_index
# from llama_utils.settings import update_settings
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv
import os
from flask_cors import CORS
from flask import Flask, request, jsonify
import json
from flask import Blueprint, request
# from run import chat_engine
import google.generativeai as genai
import os
from langchain.chains import RetrievalQA
from langchain_community.document_loaders import WebBaseLoader
from langchain_core.prompts import PromptTemplate
from langchain_google_vertexai import VertexAIEmbeddings, VertexAI
from dotenv import load_dotenv
import os
import google.generativeai as genai
import vertexai
import google.auth

# Setting up credentials
credentials, _ = google.auth.default()


load_dotenv()

google_api_key = os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=google_api_key)
vertexai.init(project="gen-lang-client-0193117932")

model = genai.GenerativeModel('gemini-1.5-flash')

# get lama index
# index = get_index()

# llm = Gemini(model_name="models/gemini-pro", api_key=gemeni_api_key)
# embed_model = LangchainEmbedding(HuggingFaceEmbeddings(model_name='sentence-transformers/all-MiniLM-L6-v2'))
# memory = ChatMemoryBuffer.from_defaults(token_limit=8192)

# # update settings
# update_settings(llm, embed_model)

# # retriever
# index.as_retriever(memory=memory,embed_model=embed_model)

# # chat engine
# chat_engine = index.as_chat_engine(
#     chat_mode="context",
#     memory=memory,
#     embed_model=embed_model,
#     verbose=True
# )


#Aditya-Code
def get_embeddings():

    modelPath = "Alibaba-NLP/gte-large-en-v1.5"

    model_kwargs = {'device':'cpu', 'trust_remote_code': True}

    encode_kwargs = {'normalize_embeddings': False}

    embeddings = HuggingFaceEmbeddings(
        model_name=modelPath,     
        model_kwargs=model_kwargs, 
        encode_kwargs=encode_kwargs # Pass the encoding options
        )
    return embeddings

def get_llm(model_name):
    llm = VertexAI(model_name=model_name)
    return llm

def get_response_llm( query):
    prompt_template = """
    Human: Answer the question as detailed as possible from the provided context, make sure to provide all the details, humanize the response. 
    You can provide links as well. Use you external knowledge to make it effective. These questions are for dementia patients, If you don't know the answer,use your knowledge of alzheimer's and 
    dementia, and also from Dementia UK website.\n
    
    Context:\n {context}?\n
    Question: {question}
    
    Assistant:
    """
    prompt = PromptTemplate(template=prompt_template, input_variables=['context', 'question'])
    llm = get_llm(model_name="gemini-1.5-flash")

    qa = RetrievalQA.from_chain_type(
        llm=llm,
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

embeddings = get_embeddings()

faiss_index = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)


app = Flask(__name__)
CORS(app)




@app.route('/')
def index():
    return json.dumps({"message": "Hello, World!"})	

@app.route('/query', methods=['GET'])
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


@app.route('/personalised-query', methods=['GET'])
def peronalisedquery():
    # get query
    query = request.args.get('query')
    
    # fetch response
    response, links = get_response_llm(query)

    # extract the generated content from the response
   

    # return the generated content as the response
    return json.dumps({"response": response, "links": links})

if __name__ == '__main__':
    app.run(debug=False)
    

# def main():
#     from app import create_app
#     app = create_app()
#     CORS(app)
#     app.run(debug=True, port=5000)

# if __name__ == '__main__':
#     main()