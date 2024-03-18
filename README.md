# CampusLots

### Project Structure

This repository contains the following components:

- Frontend: Contains the Next.js frontend application.
- Node.js Server: Contains the Node.js/Express server.
- Flask Server: Contains the Flask server.


Different steps need to be followed to run each component.


## Setting Up and Running Components

## Frontend

Navigate to the frontend directory:
```sh
cd frontend
```

Install dependencies:
```sh
npm install
```

Run the frontend:
```sh
npm run dev
```

## Node.js Server

Navigate to the node server directory:
```sh
cd node-server
```

Install dependencies:
```sh
npm install
```

Run the server:
```sh
npm run dev
```

## Flask Server

Navigate to the flask server directory:
```sh
cd flask-server
```

Create a virtual environment (Windows):
```sh
python -m venv venv
```

For Mac, use:
```sh
python3 -m venv venv
```

Activate the virtual environment (Windows):
```shell
.\venv\Scripts\activate
```

For Mac, use:
```sh
source venv/bin/activate
```

Install packages:
```sh
pip install -r requirements.txt
```

Start the server:
```sh
python app.py
```