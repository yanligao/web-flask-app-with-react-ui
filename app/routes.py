# from flask import render_template
# from . import create_app

# app = create_app()

# @app.route('/')
# @app.route('/index')
# def index():
#     return render_template('index.html', title='Home')

from flask import render_template, Blueprint, jsonify, request
from flask_cors import CORS

main = Blueprint('main', __name__)
CORS(main)

# @main.route('/')
# @main.route('/index')
# def index():
#     return render_template('index.html', title='Home')

@main.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)