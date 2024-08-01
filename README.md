# dementia

## Architecture
![image](https://github.com/user-attachments/assets/52bfa315-b7e2-417b-aa03-c70c358941ec)


## 🛠️Installation 

### Backend

1. Clone

  ```bash
    https://github.com/OmAvhad/dementia.git
  ```
    
2. Move into the project
  ```bash
    cd dementia/server/
  ```

3. Create environment and activate it
  ```bash
    # install environment package
    pip install virtualenv

    # Windows
    # create environment
    virtualenv env
    # activate virtual environment
    env\Scripts\activate

    # Linux or Mac
    # create environment
    python3 -m venv env
    # activate virtual environment
    source env/bin/activate
  ```

4. Install packages
  ```bash
  pip3 install -r requirements.txt
  ```

5. Create .env file with reference to .env.sample
  ```python
    OPENAI_API_KEY=<yourkey>
    TOKENIZERS_PARALLELISM=false
    GOOGLE_API_KEY=<yourkey>
  ```

7. Start flask app
  ```bash
    python run.py
  ```
