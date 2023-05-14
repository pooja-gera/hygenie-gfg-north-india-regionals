import io
import classification
from PIL import Image
from base64 import b64encode
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template("report.html")

@app.route('/uploader', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']
        print(f)
        image_data = f.read()
        image_buffer = io.BytesIO(image_data)
        image = Image.open(image_buffer).convert("RGB")

        label = classification.classification_model(image)

        image_base64 = b64encode(image_data).decode("utf-8")

        return render_template('output.html', label=label[0], score=label[1], image=image_base64)

    return ""

if __name__ == "__main__":
    app.run(debug=True)