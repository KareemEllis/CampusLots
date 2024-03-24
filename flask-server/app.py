from flask import Flask, Response
from flask_cors import CORS
import json
import time

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello from Flask Server!'

def event_stream():
    i = 0
    while True:
        data = {'message': i+1}
        yield f"data: {json.dumps(data)}\n\n"
        i += 1
        time.sleep(1)

@app.route('/api/sse')
def sse():
    return Response(event_stream(), content_type='text/event-stream')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)  # Define host and port
