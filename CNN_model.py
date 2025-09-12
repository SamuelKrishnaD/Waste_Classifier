from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image

MODEL_PATH = "./CNN_model.h5"
model = load_model(MODEL_PATH)

CLASS_NAMES = ["O", "R"]  

def preprocess_image(img):
    img = img.resize((224, 224))
    arr = np.array(img) / 255.0
    arr = np.expand_dims(arr, axis=0)
    return arr

def predict_image(image):
    arr = preprocess_image(image)
    preds = model.predict(arr)
    print("Predicted probabilities:", preds) 
    pred_idx = np.argmax(preds[0])
    pred_class = CLASS_NAMES[pred_idx]
    confidence = float(preds[0][pred_idx])
    return pred_class, confidence
