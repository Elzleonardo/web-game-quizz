# Pengujian Web Quiz Game dan Interaksi antara Programer dan Pentester

## 🧪 Tujuan Pengujian

Tujuan dari dokumen ini adalah untuk menjelaskan proses pengujian perangkat lunak dari web Quiz Game menggunakan tiga pendekatan utama dalam pengujian: **White Box Testing**, **Black Box Testing**, dan **Gray Box Testing**. Pengujian ini bertujuan untuk menjamin kualitas, keandalan, dan keamanan aplikasi dalam berbagai aspek fungsionalitas.

---

## 1. 🔍 White Box Testing (Pengujian Kotak Putih)

### 🎯 Definisi

White Box Testing adalah metode pengujian yang fokus pada logika internal dari sistem. Penguji perlu mengetahui struktur kode dan melakukan pengujian berdasarkan alur kontrol program.

### 🔧 Area yang Diuji

* Fungsi `generateQuestion()`
* Fungsi `submitAnswer()`
* Validasi pada fungsi login

### 🧪 Teknik

* Basis Path Testing
* Condition Testing
* Loop Testing

### 📋 Tabel Pengujian

| No | Fungsi             | Input                     | Output yang Diharapkan  | Status |
| -- | ------------------ | ------------------------- | ----------------------- | ------ |
| 1  | generateQuestion() | a=5, b=3, +               | correctAnswer = 8       | ✅      |
| 2  | generateQuestion() | a=7, b=0, /               | correctAnswer tidak NaN | ✅      |
| 3  | submitAnswer()     | userAnswer=10, correct=10 | Feedback: Benar!        | ✅      |
| 4  | submitAnswer()     | userAnswer=3, correct=4   | Feedback: Salah!        | ✅      |

### 🧠 Hasil

Seluruh cabang logika dan jalur eksekusi telah diuji dengan hasil sesuai ekspektasi. Tidak ada kondisi tidak terjangkau (dead code).

---

## 2. 🧱 Black Box Testing (Pengujian Kotak Hitam)

### 🎯 Definisi

Black Box Testing dilakukan tanpa mengetahui struktur kode program. Fokusnya adalah pengujian fungsionalitas dari perspektif pengguna.

### 🔧 Area yang Diuji

* Login
* Navigasi antar halaman
* Validasi input soal dan output feedback

### 🧪 Teknik

* Equivalence Partitioning
* Boundary Value Analysis
* Decision Table

### 📋 Tabel Pengujian Login

| No | Username | Password | Aksi  | Output Diharapkan          | Status |
| -- | -------- | -------- | ----- | -------------------------- | ------ |
| 1  | user     | 123      | Login | Masuk ke halaman dashboard | ✅      |
| 2  |          | 123      | Login | Muncul pesan error         | ✅      |
| 3  | user     |          | Login | Muncul pesan error         | ✅      |

### 📋 Tabel Pengujian Quiz

| No | Soal  | Jawaban User | Hasil yang Diharapkan | Status |
| -- | ----- | ------------ | --------------------- | ------ |
| 1  | 5 + 3 | 8            | Feedback: Benar!      | ✅      |
| 2  | 9 / 3 | 2            | Feedback: Salah!      | ✅      |

### 🧠 Hasil

Aplikasi memberikan respon tepat terhadap seluruh input yang valid maupun tidak valid. Validasi error, navigasi halaman, dan sistem skor berjalan baik.

---

## 3. ⚙️ Gray Box Testing (Pengujian Kotak Abu-abu)

### 🎯 Definisi

Gray Box Testing merupakan kombinasi dari white box dan black box. Penguji mengetahui sebagian struktur internal dan menguji integrasi serta interaksi antar modul.

### 🔧 Area yang Diuji

* Integrasi login → dashboard → quiz
* Validasi skor setelah beberapa soal
* Validasi input yang dimanipulasi via console browser

### 📋 Tabel Pengujian Integrasi

| No | Langkah                            | Output Diharapkan          | Status |
| -- | ---------------------------------- | -------------------------- | ------ |
| 1  | Login → Start Quiz → Jawab Soal    | Soal tampil, skor tercatat | ✅      |
| 2  | Langsung akses quiz tanpa login    | Redirect ke halaman login  | ✅      |
| 3  | Jawaban dimanipulasi lewat console | Skor tetap, tidak berubah  | ✅      |

### 🧠 Hasil

Aplikasi cukup tangguh terhadap intervensi pengguna dan menunjukkan stabilitas dalam pengolahan data lintas fitur. Struktur modular cukup terintegrasi.

---

## 4. 📌 Rangkuman Hasil Pengujian

| Jenis Pengujian   | Fokus                     | Hasil   | Catatan                           |
| ----------------- | ------------------------- | ------- | --------------------------------- |
| White Box Testing | Logika dan alur kode      | Lulus ✅ | Tidak ditemukan dead code         |
| Black Box Testing | UI dan interaksi pengguna | Lulus ✅ | Navigasi dan validasi baik        |
| Gray Box Testing  | Integrasi antar modul     | Lulus ✅ | Validasi input & kontrol berhasil |

---

## 5. 📎 Kedepannya

* Tambahkan sistem autentikasi dengan enkripsi
* Gunakan localStorage atau backend database untuk skor
* Tambahkan unit test otomatis dengan Jest atau Mocha
* Tambahkan pengujian E2E (end-to-end) dengan Cypress

---

## 6. 👩‍💻 Interaksi Kolaboratif

**Elsa** sebagai programmer menerima laporan bug dan celah dari **Suara** sebagai pentester. Hasil diskusi ditindaklanjuti dengan:

* Perbaikan redirect dan validasi login
* Penanganan input script injection (XSS)
* Adaptasi UI untuk mobile dengan media query

## Interaksi: Programmer vs Pentester

### Tokoh:
- 👩‍💻 **Elsa** — Programmer utama aplikasi Math Quiz Game
- 🕵️‍♂️ **Suara** — Penguji (Pentester) yang memverifikasi keamanan dan keandalan sistem

### Interaksi 1: Validasi Akses Login
**Suara**: "Elsa, saya bisa buka halaman quiz tanpa login jika langsung akses URL."

**Elsa**: "Terima kasih, Suara. Saya akan tambahkan kondisi di awal quizSection agar hanya bisa ditampilkan jika user sudah login."

✅ Perbaikan: Menambahkan pengecekan session user pada `startQuiz()`.

### Interaksi 2: Manipulasi Skor
**Suara**: "Saya bisa ubah skor dari DevTools menjadi 999."

**Elsa**: "Benar, karena skor masih disimpan di sisi klien. Untuk jangka panjang, kita perlu backend atau session storage yang aman."

✅ Rencana: Tambahkan backend sederhana dengan validasi skor dan token login.

### Interaksi 3: Responsivitas UI
**Suara**: "Tampilan bagus, tapi tombol tidak responsif di layar kecil."

**Elsa**: "Saya akan tambah media query di CSS agar tombol dan input menyesuaikan layar mobile."

✅ Update: Tambah `@media` CSS agar kompatibel di semua perangkat.

### Interaksi 4: Kemungkinan XSS pada input
**Suara**: "Input username bisa saya isi dengan `<script>alert('XSS')</script>`."

**Elsa**: "Saya akan filter input agar tidak menerima tag HTML/JS."

✅ Fix: Menambahkan sanitasi input sebelum disimpan ke variabel.

---

## Kesimpulan
Aplikasi telah diuji dari berbagai sisi: logika internal (white box), fungsionalitas pengguna (black box), dan integrasi (gray box). Kolaborasi antara Elsa dan Suara menghasilkan aplikasi yang tidak hanya fungsional, tetapi juga lebih aman dan stabil.

Dokumen ini dapat diperluas untuk pengujian pada fitur tambahan seperti leaderboard, penyimpanan skor, atau integrasi backend di masa mendatang.
