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

## 📖 Project Description
This group project is an assignment for the Machine Learning course in my 4th semester of college. I contributed to the **entire machine learning pipeline**:
- Conducted dataset search and selection from Kaggle and other sources  
- Performed **data preprocessing** (rescaling, augmentation, cleaning corrupted files)  
- Trained and evaluated a **CNN model (MobileNetV2)** for binary classification (organic vs. recyclable)  
- Deployed the model with a simple **frontend (HTML, CSS, JS)** and **backend (Flask/Python)** for real-time image classification  

Through this project, I learned how to build a complete ML workflow from **data collection → training → evaluation → deployment**, apply artificial intelligence to address a practical real-world problem (waste management), and how to integrate an ML model into a **web-based interface** for easier user interaction

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

