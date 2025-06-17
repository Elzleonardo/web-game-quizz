##  Gray Box Testing
Gray box testing menggabungkan teknik black box dan white box, di mana pengujian dilakukan dengan pengetahuan terbatas tentang struktur program. Ini biasanya dilakukan oleh tester dengan akses ke kode sebagian atau dokumentasi.

### Fokus
- Integrasi alur login → dashboard → kuis

### Tabel: Gray Box Testing Integrasi Login dan Quiz
| No | Skenario                                               | Output yang Diharapkan                             | Status |
|----|---------------------------------------------------------|----------------------------------------------------|--------|
| 1  | User login lalu start quiz                             | Soal tampil sesuai dan skor bisa dihitung         | ✅     |
| 2  | User akses halaman quiz langsung tanpa login           | Quiz tidak bisa diakses, sistem menolak akses     | ✅     |

### Tabel: Gray Box Validasi Skor
| No | Input Jawaban       | Kondisi Sistem                     | Output yang Diharapkan                        | Status |
|----|----------------------|------------------------------------|------------------------------------------------|--------|
| 1  | Jawaban benar       | Skor sebelumnya 10                | Skor bertambah jadi 20                        | ✅     |
| 2  | Jawaban salah       | Skor sebelumnya 20                | Skor tetap 20, feedback jawaban benar muncul  | ✅     |
