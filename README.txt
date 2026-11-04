AKSANIRA — PATCH GAMBAR ARTIKEL + HAPUS TOMBOL EXCEL/CSV

Isi:
- index.html: tombol Unduh Excel / CSV dihapus; fitur tambah, reset, dan cetak tetap ada.
- 103 halaman artikel HTML: setiap halaman diberi gambar hero kategori yang terlihat di dalam artikel, caption, alt text unik, metadata og:image/twitter:image, dan image pada Article JSON-LD.
- images/: 10 ilustrasi SVG lokal (tanpa ketergantungan URL eksternal).

CARA DEPLOY:
1. Ekstrak ZIP.
2. Salin index.html ke root repository (ganti file lama).
3. Salin seluruh 103 file HTML artikel ke root repository (ganti file dengan nama sama).
4. Salin folder images ke root repository; gabungkan dengan folder images yang sudah ada jika ada.
5. Commit semua perubahan SEKALI agar hanya satu deployment Vercel yang dijalankan.

PENTING:
- Jangan hapus file website lain.
- Tidak perlu mengunggah ulang halaman statis lain, sitemap.xml, robots.txt, atau konfigurasi domain.
- Artikel menggunakan URL gambar lokal /images/... sehingga gambar ikut ter-host di domain AKSANIRA.
- Patch ini memperbaiki masalah sebelumnya: paket gambar terdahulu hanya berisi aset gambar dan belum memuat perubahan HTML untuk menampilkan gambar.
