# 🎓 Analisis Sentimen Ulasan Pelanggan Alfamart Menggunakan SVM

> Presentasi Final Tugas Akhir oleh **Zulfikar Juniarto**  
> Program Studi Teknik Informatika – Universitas Dharma Wacana  
> 📅 Metro, 24 Juni 2026

---

## 📖 Tentang Proyek

Repository ini berisi **presentasi interaktif** hasil penelitian Tugas Akhir yang menganalisis sentimen ulasan pelanggan Alfamart menggunakan algoritma **Support Vector Machine (SVM)** dengan optimasi **SMOTE**. Presentasi dirancang dengan tampilan modern, responsif, dan animasi halus menggunakan GSAP.

🔗 **Live Demo**: [Klik di sini untuk melihat presentasi](#) *(ganti dengan link部署 Anda)*

---

## ✨ Fitur Presentasi

| Fitur | Deskripsi |
|-------|-----------|
| 🎨 **Visual Interaktif** | Animasi partikel latar, transisi slide halus, dan donut chart dinamis |
| 📊 **Data Real** | Menampilkan 76.951 ulasan dari 30+ kota di seluruh Indonesia |
| 🧠 **Perbandingan Eksplisit** | Skenario A (SVM) vs Skenario B (SVM + SMOTE) |
| 📈 **Metrik Lengkap** | Akurasi, F1-Score, Recall, Confusion Matrix |
| 📱 **Responsif** | Optimal untuk proyektor, laptop, dan perangkat mobile |
| 🎯 **Navigasi Intuitif** | Tombol panah, dot indicator, keyboard shortcut, dan touch support |

---

## 🗺️ Alur Presentasi (16 Slide)

| # | Slide | Konten Utama |
|---|-------|--------------|
| 1 | **Pembuka** | Judul, Nama, NIM, Universitas |
| 2 | **Alur Presentasi** | Peta jalan penelitian |
| 3 | **Latar Belakang** | Masalah & celah penelitian (77K vs 4K data) |
| 4 | **Rumusan Masalah** | 2 pertanyaan penelitian utama |
| 5 | **Tinjauan Pustaka** | 14 penelitian terdahulu & gap analysis |
| 6 | **Kebaruan Penelitian** | 77.828 data, 30+ kota, perbandingan SMOTE |
| 7 | **Metodologi** | Alur preprocessing hingga evaluasi |
| 8 | **Distribusi Sentimen** | Donut chart: Netral 49.38%, Positif 36.25%, Negatif 14.37% |
| 9 | **Skenario A (SVM)** | Akurasi 96.67%, F1-Macro 96.03% |
| 10 | **Skenario B (SVM+SMOTE)** | Akurasi 96.72%, Recall Negatif +2% |
| 11 | **Perbandingan** | Analisis komprehensif A vs B |
| 12 | **Pengujian Manual** | 11 opini buatan, confidence >95% |
| 13 | **Confusion Matrix** | Pola kesalahan klasifikasi |
| 14 | **Keterbatasan & Saran** | 4 keterbatasan + 6 saran pengembangan |
| 15 | **Kesimpulan** | Jawaban atas 2 rumusan masalah |
| 16 | **Penutup** | Terima Kasih & Sesi Tanya Jawab |

---

## 🧪 Hasil Utama Penelitian

### 📊 Perbandingan Performa

| Metrik | SVM (Tanpa SMOTE) | SVM + SMOTE | Perubahan |
|--------|-------------------|-------------|-----------|
| **Akurasi** | 96.67% | 96.72% | ⬆️ +0.05% |
| **F1-Macro** | 96.03% | 96.19% | ⬆️ +0.16% |
| **Recall Negatif** | 95% | 97% | ⬆️ **+2%** 🚀 |
| **CV 5-Fold** | 95.70% ± 0.16% | 95.93% ± 0.20% | ⬆️ +0.23% |

### 🎯 Kontribusi Penelitian

1. **Skala Data Terbesar** – 77.828 ulasan (18x lebih besar dari rata-rata studi lain)
2. **Cakupan Geografis Luas** – 30+ kota di seluruh Indonesia
3. **Analisis SMOTE Eksplisit** – Pengaruh SMOTE pada recall kelas negatif
4. **Stabilitas Tinggi** – CV std dev < 0.2% membuktikan tidak overfitting

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
|----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Animasi** | GSAP (GreenSock Animation Platform) v3.12.5 |
| **Partikel** | Canvas API |
| **Font** | Google Fonts – Inter |
| **Responsif** | CSS Grid, Flexbox, Clamp units |

---
