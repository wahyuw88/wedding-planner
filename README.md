# Aksanira Website

Website statis multi-halaman untuk brand Aksanira, dengan planner seserahan sebagai fitur utama.

## Halaman
- `index.html` — beranda dan planner seserahan interaktif.
- `artikel.html` — pusat artikel.
- `artikel-checklist-seserahan.html` — panduan checklist seserahan.
- `artikel-anggaran-seserahan.html` — panduan anggaran.
- `artikel-adat-seserahan.html` — panduan adat dan tradisi.
- `tentang.html` — profil Aksanira.
- `produk.html` — katalog produk digital.
- `kontak.html` — halaman kontak (atur alamat email tujuan pada variabel `to`).
- `kebijakan-privasi.html` — draft kebijakan privasi.
- `vercel.json` — konfigurasi deployment.

## Deploy
Upload seluruh isi folder ke root repository GitHub, lalu import repository ke Vercel. Framework Preset: Other; Build Command kosong; Output Directory: `.`.

## Catatan sebelum publikasi
1. Formulir kontak telah dikonfigurasi menggunakan endpoint Formspree Aksanira. Pastikan alamat email penerima sudah diverifikasi di dashboard Formspree.
2. Tambahkan domain, tautan media sosial, dan informasi bisnis resmi.
3. Review kebijakan privasi sesuai layanan yang benar-benar digunakan.
4. SEO dasar telah diterapkan: judul dan deskripsi unik per halaman, Open Graph, Twitter Cards, data terstruktur JSON-LD, bahasa Indonesia, serta robots.txt.
5. Domain produksi yang dikonfigurasi: https://aksanira.my.id. Canonical URL, Open Graph URL, sitemap.xml, dan referensi sitemap di robots.txt sudah menggunakan domain ini. Pastikan domain sudah terhubung ke project Vercel dan HTTPS aktif sebelum mengirim sitemap ke mesin pencari.
6. Daftarkan domain di Google Search Console dan Bing Webmaster Tools, verifikasi kepemilikan, kirim sitemap.xml, lalu pantau indexing, Core Web Vitals, dan kueri pencarian.
7. Pastikan setiap gambar memiliki alt yang deskriptif, ukuran file wajar, dan gambar penting tidak tertunda (lazy-load hanya untuk gambar di bawah area awal).
8. Gunakan nama brand, deskripsi, dan informasi kontak yang konsisten di seluruh kanal. Hindari menambahkan keyword berulang secara tidak alami.
9. Formulir kontak menggunakan Formspree dan membutuhkan koneksi internet. Lakukan uji kirim dari website setelah deployment untuk memastikan konfigurasi penerima aktif.


## Ekspansi konten SEO
- Pusat artikel memuat 100 artikel dalam 10 kategori yang saling terhubung.
- Setiap artikel memiliki URL bersih, canonical, meta description, Open Graph, structured data Article, serta tautan bacaan terkait.
- Sitemap diperbarui untuk seluruh halaman. Pastikan Vercel mengaktifkan cleanUrls.
- Naskah merupakan draf editorial orisinal untuk ditinjau dan disunting manusia sebelum publikasi. Tidak ada cara yang dapat menjamin hasil lolos semua pemeriksa plagiarisme atau deteksi AI; lakukan pemeriksaan kemiripan dan verifikasi fakta sebelum tayang.
