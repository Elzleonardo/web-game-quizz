# 🧮 Web Game Kuis Matematika Interaktif

Game edukatif berbasis web untuk melatih kemampuan berhitung dasar (penjumlahan, pengurangan, perkalian, pembagian) dengan sistem akun pengguna, dashboard skor, dan sistem pengujian perangkat lunak (white-box, black-box, dan gray-box).

---

## 🎯 Fitur Utama

- ✅ **Autentikasi Pengguna**
  - Registrasi akun
  - Login dan Logout
  - Validasi input dan penyimpanan akun (saat ini via `localStorage`)
  
Repositori ini dibuat untuk mendokumentasikan proses **pengujian perangkat lunak** menggunakan tiga pendekatan utama:
- 💻 Pembuatan dan Pengembangan Aplikasi
- ⚪ White Box Testing
- ⚫ Black Box Testing
- 🔘 Grey Box Testing

## 👥 Kelompok
| No | Nama Anggota       | NIM         | 
|----|--------------------|-------------|
| 1  | Elsa Nur Aripin       | 20221310035  | 
| 2  | Muh. Suara tansa      | 20221310026       | 

- 🎮 **Kuis Matematika**
  - Soal acak: tambah (`+`), kurang (`-`), kali (`×`), bagi (`÷`)
  - Interface interaktif dengan penghitungan skor real-time
  - Timer dan sistem evaluasi jawaban

- 📊 **Dashboard**
  - Menampilkan skor terakhir dan total percobaan
  - Statistik performa pemain

- 🧪 **Pengujian Lengkap**
  - **White-box Testing**: Analisis alur kontrol kode, walkthrough, inspeksi
  - **Black-box Testing**: Uji fungsionalitas eksternal seperti login, validasi
  - **Gray-box Testing**: Kombinasi pengujian internal dan eksternal

---

## 🧰 Teknologi yang Digunakan

- **Frontend**: HTML, CSS, JavaScript
- **Penyimpanan Lokal**: localStorage
- **Struktur Siap Backend**: Disiapkan untuk diintegrasikan ke PHP/MySQL atau Firebase

---

## 🚀 Cara Menjalankan

1. **Tanpa Server (versi client-only)**:
   - Unduh file ZIP ini atau clone repositori GitHub
   - Buka file `index.html` di browser

2. **Dengan Server (opsional)**:
   - Untuk versi dengan backend PHP: siapkan XAMPP/Laragon
   - Impor file SQL jika menggunakan database
   - Jalankan melalui `localhost`

---

## 🧪 Struktur Pengujian

Pengujian terdapat di folder `/test`:
