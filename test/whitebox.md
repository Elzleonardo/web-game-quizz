## White Box Testing
White box testing dilakukan untuk memastikan bahwa logika dan alur dalam kode sumber aplikasi berjalan sesuai dengan yang diharapkan. Pada pengujian ini dilakukan pemeriksaan terhadap alur program, kondisi, percabangan, dan perulangan secara langsung dengan melihat kode program.

### Tabel: White Box Testing Function `login()`
| No | Langkah Pengujian | Input                  | Output yang Diharapkan                         | Status |
|----|--------------------|-------------------------|-------------------------------------------------|--------|
| 1  | Username dan password diisi | username: user, password: 123 | Berhasil login dan muncul dashboard            | ✅     |
| 2  | Username kosong            | username: "", password: 123  | Muncul alert "Username dan password tidak boleh kosong!" | ✅     |
| 3  | Password kosong            | username: user, password: "" | Muncul alert "Username dan password tidak boleh kosong!" | ✅     |

### Tabel: White Box Testing Function `generateQuestion()`
| No | Langkah Pengujian        | Operator | Contoh Soal   | Output yang Diharapkan                    | Status |
|----|---------------------------|----------|----------------|-------------------------------------------|--------|
| 1  | Soal penjumlahan         | +        | 4 + 5          | correctAnswer = 9                         | ✅     |
| 2  | Soal pengurangan         | -        | 8 - 3          | correctAnswer = 5                         | ✅     |
| 3  | Soal perkalian           | *        | 3 * 7          | correctAnswer = 21                        | ✅     |
| 4  | Soal pembagian           | /        | 6 / 2          | correctAnswer = 3.00                      | ✅     |

### Tabel: White Box Testing Function `submitAnswer()`
| No | Jawaban Pengguna | correctAnswer | Output yang Diharapkan                       | Status |
|----|------------------|----------------|----------------------------------------------|--------|
| 1  | Benar            | 10             | "Benar!" dan score bertambah 10              | ✅     |
| 2  | Salah            | 10             | Feedback muncul dan score tidak bertambah    | ✅     |
