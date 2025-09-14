# ♻️ Waste Classifier (CNN MobileNetV2)

A deep learning project using Convolutional Neural Networks (CNNs) to classify waste images into two categories:
- **Organic**
- **Recyclable**

---

## 📂 Dataset
- Total: **25.100 images**  
  - Training set: 22,599 images
  - Test set: 2,513 images

### Preprocessing
- Rescaling  
- Data augmentation: random flip, rotation, zoom  
- Prefetching & parallel mapping  
- Removed corrupted or incompatible images with TensorFlow

---

## 📊 Results
- **Accuracy:** 88%  
- **F1-score:** 88%  
- **Recall:** 88%  
- **Precision:** 88%  

---

## 🚀 How to Run
1.  Clone this repository in VS Code: "git clone https://github.com/SamuelKrishnaD/Waste_Classifier.git"  
2. Install dependencies (run "pip install -r requirements.txt" on the terminal)
2. Run the app ("app.py") or run "python app.py" on the terminal
3. To preview the web interface:
     - Use the Live Server extension in VS Code
     - Open index.html directly in your browser.
5. To classify an image: upload it using the "Choose File" button and click "Classify".
6. To classify another image: click "Clear" first, then upload the new file.

