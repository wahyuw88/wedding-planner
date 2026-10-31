# The Wedding Edit — Seserahan Planner

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Upload folder hasil ekstrak ke repository GitHub.
3. Di Vercel pilih **Add New → Project**, lalu import repository tersebut.
4. Framework Preset pilih **Other**.
5. Build Command: kosongkan / Override off.
6. Output Directory: `.` (root).
7. Klik Deploy.

Aplikasi ini berupa situs statis, jadi tidak memerlukan build command, database, atau instalasi dependency di Vercel.

## Jalankan lokal
Butuh Node.js 18 atau lebih baru:
1. Buka terminal di folder proyek.
2. Jalankan `npm start`.
3. Buka http://localhost:3000

## Fitur
- Daftar awal 36 item dalam 7 kategori
- Tambah, edit, hapus, pencarian, filter kategori
- Ringkasan estimasi, aktual, selisih, dan status selesai
- Export CSV yang dapat dibuka di Excel
- Export PDF melalui dialog cetak browser
- Data tersimpan di localStorage browser perangkat tersebut

Catatan: Ekspor Excel saat ini menggunakan CSV agar ringan tanpa dependency tambahan.
