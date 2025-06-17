## Black Box Testing
Black box testing dilakukan tanpa melihat struktur internal kode, berfokus pada input dan output serta interaksi antarmuka pengguna.

### Skema
- Input login: salah & benar
- Registrasi: username baru & duplikat
- Game: jawaban benar/salah

### Hasil
- Respons sesuai ekspektasi UI
- Pesan error muncul saat gagal

### Tabel: Pengujian Login
| No | Input Username | Input Password | Aksi       | Output yang Diharapkan                         | Status |
|----|----------------|----------------|------------|------------------------------------------------|--------|
| 1  | user           | 123            | Klik Login | Muncul dashboard dan nama user                | ✅     |
| 2  | (kosong)       | 123            | Klik Login | Muncul alert error                            | ✅     |
| 3  | user           | (kosong)       | Klik Login | Muncul alert error                            | ✅     |

### Tabel: Pengujian Quiz
| No | Soal         | Jawaban User | Output yang Diharapkan                          | Status |
|----|--------------|--------------|-------------------------------------------------|--------|
| 1  | 2 + 3        | 5            | Feedback: "Benar!", skor bertambah               | ✅     |
| 2  | 9 / 3        | 2            | Feedback: "Salah! Jawaban yang benar adalah 3"  | ✅     |
| 3  | 4 * 2        | 8            | Feedback: "Benar!", skor bertambah               | ✅     |

### Tabel: Pengujian Navigasi
| No | Langkah                  | Aksi              | Output yang Diharapkan                          | Status |
|----|---------------------------|-------------------|-------------------------------------------------|--------|
| 1  | Login berhasil           | Klik "Start Quiz" | Quiz muncul dengan soal                         | ✅     |
| 2  | Setelah logout          | Akses quiz        | Halaman quiz tidak tampil (harus login dulu)   | ✅     |
