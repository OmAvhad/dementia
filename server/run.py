# from langchain_huggingface import HuggingFaceEmbeddings
# from llama_index.embeddings.langchain import LangchainEmbedding
# from llama_index.llms.gemini import Gemini
# from llama_index.core.memory import ChatMemoryBuffer
# from llama_utils.index import get_index
# from llama_utils.settings import update_settings
from dotenv import load_dotenv
import os
load_dotenv()

gemeni_api_key = os.getenv('GOOGLE_API_KEY')

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

def main():
    from app import create_app
    app = create_app()
    app.run(debug=True, port=5000)

if __name__ == '__main__':
    main()