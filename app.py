from flask import Flask, request, jsonify, send_from_directory, render_template
from flask_cors import CORS
from CNN_model import predict_image
from PIL import Image
import os

app = Flask(__name__, static_folder='.', template_folder='.')
CORS(app)  # Allow CORS

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/predict', methods  =['POST'])
def predict():
    try:
        if 'file' not in request.files:
            print("No file part in request")
            return jsonify({'error': 'No file part'}), 400

        file = request.files['file']
        image = Image.open(file.stream).convert('RGB')
        pred_class, confidence = predict_image(image)
        print(f"Prediction: {pred_class}, Confidence: {confidence}")

        return jsonify({'class': pred_class, 'confidence': round(confidence * 100, 2)})
    except Exception as e:
        print(f"Error during prediction: {e}")
        import traceback; traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

