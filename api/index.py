import time
from flask import Flask, Blueprint, jsonify

api = Blueprint("api", __name__)


@api.route("/")
def hello_world():
    return "Hello world!"


@api.route("/time")
def get_current_time():
    current_time = {"time": time.time()}
    return jsonify(current_time)


app = Flask(__name__)
app.register_blueprint(api, url_prefix="/api")
