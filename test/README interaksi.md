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
