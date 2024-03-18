# CampusLots

## Project Structure

This repository contains the following components:

- Frontend: Contains the Next.js frontend application.
- Node.js Server: Contains the Node.js/Express server.
- Flask Server: Contains the Flask server.


Different steps need to be followed to run each component.


## Setting Up and Running Components

### Frontend

1. Navigate to the frontend directory:
```sh
cd frontend
```

1. Install dependencies:
```sh
npm install
```

1. Run the frontend:
```sh
npm run dev
```

### Node.js Server

1. Navigate to the node server directory:
```sh
cd node-server
```

1. Install dependencies:
```sh
npm install
```

1. Run the server:
```sh
npm run dev
```

### Flask Server

1. Navigate to the flask server directory:
```sh
cd flask-server
```

2. Create a virtual environment (Windows):
```sh
python -m venv venv
```

For Mac, use:
```sh
python3 -m venv venv
```

3. Activate the virtual environment (Windows):
```shell
.\venv\Scripts\activate
```

For Mac, use:
```sh
source venv/bin/activate
```

1. Install packages:
```sh
pip install -r requirements.txt
```

1. Start the server:
```sh
python app.py
```