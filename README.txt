PATCH AKSANIRA — PENYEDERHANAAN TOOLS GRATIS & KATALOG PRODUK

File dalam ZIP:
1. tools-gratis.html — halaman publik tools gratis diringkas menjadi 3 pilihan: Kalkulator Budget, Wedding Checklist, Planner Seserahan.
2. produk.html — katalog produk digital dengan tiga paket dan penjelasan status pra-peluncuran.

Cara pemasangan:
- Ekstrak ZIP.
- Salin kedua file ke root repository website.
- Timpa tools-gratis.html dan produk.html.
- Commit dan deploy ke Vercel.

Catatan penting:
- File tool lama (countdown, guest estimator, seating planner, vendor comparison) tidak dihapus dari repository. Halaman Tools Gratis tidak lagi mempromosikannya.
- Wedding Checklist menggunakan wedding-checklist-timeline.html. Pastikan file halaman tersebut sudah ada di root deployment. Jika belum, terapkan patch Checklist & Timeline terlebih dahulu.
- Katalog produk secara sengaja belum menampilkan harga, tombol checkout, atau klaim produk siap dibeli. Produk, preview, harga final, dan pembayaran perlu difinalisasi terlebih dahulu agar pengunjung tidak diarahkan ke checkout yang belum aktif.
- Patch ini belum diterapkan ke website live. Perlu commit dan deployment di repository/Vercel.
