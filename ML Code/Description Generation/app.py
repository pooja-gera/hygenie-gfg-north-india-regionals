from flask import Flask, jsonify
from flask_cors import CORS
from generateDesc import generateDescription
app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return '''Description Generation'''
@app.route('/predict/<string:txt>',methods=['GET'])
def predict(txt):
    review = generateDescription(txt)
    isSafe = 'false'
    isClean = 'false'
    if review[1][-4:]=='true':
        isSafe='true'
    if review[2][-4:]=='true':
        isClean = 'true'
    return jsonify({'txt': review[0], 'isSafe': isSafe, 'isClean': isClean})
if __name__ == '__main__':
    app.run()