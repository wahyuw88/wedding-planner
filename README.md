# Aksanira — Seserahan Planner

Aplikasi web statis untuk menyusun daftar seserahan, memantau persiapan, dan menghitung anggaran.

## Struktur proyek
- `index.html` — aplikasi utama beserta CSS dan JavaScript.
- `vercel.json` — konfigurasi deployment Vercel.
- `README.md` — dokumentasi proyek.

Tidak diperlukan `server.js`, `package.json`, atau proses build karena aplikasi ini berjalan langsung sebagai static website.

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Upload seluruh isi folder ke repository GitHub (pastikan `index.html` berada di root repository).
3. Import repository tersebut di Vercel.
4. Pilih Framework Preset: **Other**.
5. Biarkan Build Command kosong.
6. Isi Output Directory dengan `.`.
7. Deploy.

## Jalankan lokal
Buka `index.html` langsung di browser, atau gunakan ekstensi Live Server di editor kode.

## Fitur
- Daftar item seserahan lintas agama dan kategori adat/tradisi.
- Tambah, edit, hapus, cari, dan filter item.
- Biaya per item dan jumlah dengan total anggaran otomatis.
- Status persiapan: Belum, Diproses, Selesai, Tidak digunakan.
- Export CSV yang dapat dibuka di Excel.
- Export PDF melalui dialog cetak browser.
- Data disimpan di localStorage browser.
