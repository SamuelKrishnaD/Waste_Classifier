# ♻️ Waste Classifier (CNN MobileNetV2)

Proyek deep learning dengan menggunakan **CNN (Convolutional Neural Network)** untuk klasifikasi gambar sampah menjadi 2 kelas:
- **Organik**
- **Daur Ulang (Recyclable)**

---

## 📂 Dataset
Sumber: *Waste Classification Data* (Kaggle)  
- Total: **25.100 gambar**  
  - Training set: 22.599 gambar  
  - Test set: 2.513 gambar  

### Preprocessing
- Rescaling  
- Data augmentation: random flip, rotation, zoom  
- Prefetching & parallel mapping  
- Menghapus gambar corrupt/tidak kompatibel dengan TensorFlow  

---

## 📊 Hasil
- **Akurasi:** 88%  
- **F1-score:** 88%  
- **Recall:** 88%  
- **Precision:** 88%  

---

## 🚀 Cara Menjalankan
1. Buka folder "Deploy" pada VS Code
2. Lalu install dependencies (buka terminal dan jalankan "pip install -r requirements.txt" pada terminal)
2. Run file app.py atau bisa menjalankan "python app.py" pada terminal
3. Untuk mengecek tampilan web dapat menggunakan extension "Live Server" pada VsCode atau menjalankan file index.html
4. Untuk melakukan klasifikasi bisa memasukan file gambar pada tombol "Choose File" lalu tekan tombol "Classify"
5. Untuk melakukan klasifikasi pada gambar lain, tekan tombol "Clear" terlebih dahulu. Setelah itu bisa memasukkan gambar lainnya dengan cara yang sama

