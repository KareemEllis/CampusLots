from flask import Flask, Response
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello from Flask Server!'

@app.route('/api/sse')
def send_event():
    def event_stream():
        for i in range(30):
            yield f"data: {{'message': 'Event {i+1}'}}\n\n"
            print('Sending Message')
            time.sleep(1)
    return Response(event_stream(), content_type='text/event-stream')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)  # Define host and port
