# The Wedding Edit — Seserahan Planner (Node.js)

## Kebutuhan
- Node.js 18 atau lebih baru
- Tidak memerlukan database atau `npm install` (menggunakan modul bawaan Node.js)

## Cara menjalankan
1. Ekstrak ZIP ini.
2. Buka folder `the-wedding-edit-nodejs` di Terminal / Command Prompt.
3. Jalankan: `npm start`
4. Buka Chrome dan kunjungi: http://localhost:3000

## Fitur
- Daftar awal 36 item dalam 7 kategori
- Tambah, edit, hapus, pencarian, dan filter kategori
- Ringkasan estimasi, biaya aktual, selisih anggaran, dan status selesai
- Export CSV yang dapat dibuka di Microsoft Excel
- Export PDF melalui dialog cetak browser (pilih "Save as PDF")
- Data tersimpan di localStorage browser pada perangkat yang digunakan

Catatan: CSV dipilih agar aplikasi tetap ringan tanpa library tambahan. File CSV bisa dibuka di Excel; jika perlu format .xlsx asli, fitur tersebut dapat ditambahkan dengan library khusus.
