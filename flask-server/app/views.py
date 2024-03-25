import os
from app import app, db
from flask import request
from app.models import *


@app.route('/')
def home():
    pass