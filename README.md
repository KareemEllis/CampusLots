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
`cd frontend`

1. Install dependencies:
`npm install`

1. Run the frontend:
`npm run dev`

### Node.js Server

1. Navigate to the node server directory:
`cd node-server`

1. Install dependencies:
`npm install`

1. Run the server:
`npm run dev`

### Flask Server

1. Navigate to the flask server directory:
`cd flask-server`

2. Create a virtual environment (Windows):
`python -m venv venv`

    For Mac, use:
`python3 -m venv venv`

3. Activate the virtual environment (Windows):
`.\venv\Scripts\activate`

    For Mac, use:
`source venv/bin/activate`

1. Install packages:
`pip install -r requirements.txt`

1. Start the server:
`python app.py`