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
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os
import google.generativeai as genai
import vertexai
import pandas as pd
import numpy as np
import datetime
from datetime import timedelta
import math


load_dotenv()

gcp_api_key = os.getenv('GOOGLE_API_KEY')
project_id = os.getenv('project')
genai.configure(api_key=gcp_api_key)
# vertexai.init(project="gen-lang-client-0193117932")

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

def distance(l1,l2):
    return (math.sqrt((l1[0]-l2[0])**2 + (l1[1]-l2[1])**2))/2

def diff(t1,t2):
    l = datetime.datetime.strptime(t2, datetimeFormat) - datetime.datetime.strptime(t1, datetimeFormat)
    d = l.seconds
    return d

def f4(segment):
    F4=[]
    c=-1
    for i in range(len(segment)):
        diff = datetime.datetime.strptime(ep_segt[c+len(segment[i])], datetimeFormat) - datetime.datetime.strptime(ep_segt[c+1], datetimeFormat)
        #c+=len(segment[i])
        if diff.seconds==0:
            speed=0
        else:
            speed = (distance(p[segment[i][0]], p[segment[i][len(segment[i])-1]]))/(diff.seconds)
        c+=len(segment[i])
        F4.append(speed)
    return F4 

def new(segment):
    v=list()
    c=0
    for i in range(len(segment)):
        f=0
        if len(segment[i])>=2:
            for j in range(len(segment[i])-1):
                c+=1
                if diff(ep_segt[c],ep_segt[c+1])==0:
                    continue
                s = (distance(p[segment[i][j]], p[segment[i][j+1]]))/(diff(ep_segt[c],ep_segt[c+1]))
                if s<10:
                    f=1
                    #v.append(segment[i])
        
        if f==1:
            v.append(segment[i])
        c+=1
    return v  

def direct(segment):
    l=[]
    
    for i in range(len(segment)):
        f=0
        g=0

        n=len(segment[i])
        for j in range(n-1):
            for k in range(j+1,n):
                if segment[i][j]==segment[i][k]:
                    l.append(0)
                    f=1
                    g=1
                if g==1:
                    break
            if g==1:
                break
        if f==0:
            l.append(1)
            
    return l 

def pacing(segment):
    m = []
    for i in range(len(segment)):
        x = []
        n = len(segment[i])
        for j in range(n-3):
            if segment[i][j] == segment[i][j+2] and segment[i][j+1]==segment[i][j+3]:
                k = j+4
                while k<n-1 :
                    if segment[i][j]==segment[i][k] and segment[i][j+1]==segment[i][k+1]:
                        k+=2
                    else:
                        break
                x.append(2) 
                j = k-2
        m.append(x)
    return m

def islaping(seg,i,j):
    l=seg[i:j]
    l=list(set(l))
    #if j-i-len(l)<3:
    if len(l)< 3:
        return False
    else:
        return True

def laping(segment):
    g=[]
    for i in range(len(segment)):
        tempEnd1=-1
        tempEnd2=-1
        h=[]
        n = len(segment[i])
        for j in range(n-1):
            for k in range(j+1,n):
                if segment[i][k]==segment[i][j]:
                    l=0
                    while j+l<k and k+l<n:
                        if segment[i][j+l]==segment[i][k+l]:
                            l+=1
                        else:
                            break
                    if j+l == k or j+1 == k-1:
                        if tempEnd1 < k+l and islaping(segment[i],j,k):
                            h.append(3)
                            tempEnd1=k+l
                            break
                    if (k-j)%2 == 0:
                        l = j+1
                        while l<(j+k)/2 and l<n:
                            if k-l+j<n and segment[i][l]==segment[i][k-l+j]:
                                l+=1
                            else:
                                break
                        if l==(j+k)/2:
                            if tempEnd2<k and islaping(segment[i],j,k):
                                h.append(3)
                                tempEnd2=k
                                break
        g.append(h)
    return g

def classify(segment):   
    f=[-1 for _ in range(len(segment))]
    l1=direct(segment)
    l2=pacing(segment)
    l3=laping(segment)
    for i in range(len(segment)):
        if l1[i]==1:
            f[i]=1
        else:
            if len(l2[i])==0 and len(l3[i])==0:
                f[i]=4
            elif len(l2[i])>=len(l3[i]):
                f[i]=2
            else :
                f[i]=3
            #else:
            #    f[i]=2
    return f

def week_pattern():
    l = [ 2,2, 4, 2, 2,2,3]
    return l

def month_pattern():
    l = [ [ 2,2, 4, 2, 2,2,3],
    [ 2,2, 1, 1, 1,1,1],
    [ 2,3, 2, 2, 2,2,3],
    [ 2,2, 2, 2, 3,2,3]
    ]
    return l


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
    llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash",google_api_key=gcp_api_key,
                             temperature=0.2,convert_system_message_to_human=True)

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
    response, links = walking

    # extract the generated content from the response
   

    # return the generated content as the response
    return json.dumps({"response": response, "links": links})


@app.route('/walking-patterns', methods=['GET'])
def walkingpatterns():
    # get query
    # query = request.args.get('query')
    
    # fetch response
    weekpattern = week_pattern()
    monthpattern = month_pattern()

    return json.dumps({"weekpattern": weekpattern, "monthpattern": monthpattern})



if __name__ == '__main__':
    app.run(debug=False)
    

# def main():
#     from app import create_app
#     app = create_app()
#     CORS(app)
#     app.run(debug=True, port=5000)

# if __name__ == '__main__':
#     main()