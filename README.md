# The Wedding Edit — Seserahan Planner

## Deploy ke Vercel
Aplikasi ini berupa static website.
1. Upload isi folder ini ke repository GitHub.
2. Import repository di Vercel.
3. Framework Preset: Other.
4. Build Command: kosong / Override off.
5. Output Directory: `.`.
6. Deploy.

Pastikan `index.html` berada di root repository, bukan di dalam subfolder tambahan.

## Jalankan lokal
Butuh Node.js 18+. Jalankan `npm start`, lalu buka http://localhost:3000.

## Fitur
- 36 item awal dalam 7 kategori
- Tambah, edit, hapus, cari, filter
- Satu kolom biaya: biaya aktual per item
- Total biaya aktual dihitung otomatis berdasarkan jumlah
- Export CSV yang dapat dibuka di Excel
- Export PDF melalui dialog cetak browser
- Data disimpan di localStorage browser
