
# Test Tahap 2 - Technoparner Indonesia


Ini adalah proyek React yang menggunakan beberapa pustaka dan dependensi untuk membangun aplikasi berbasis web. Proyek ini dikembangkan menggunakan React, dan panduan ini akan menjelaskan langkah-langkah untuk memulai.

## Fitur

- [React Router](https://reactrouter.com/) untuk manajemen routing.
- [Axios](https://axios-http.com/) untuk komunikasi HTTP dengan API.
- [Styled Components](https://styled-components.com/) untuk styling komponen.

## Prasyarat

Pastikan Anda telah menginstal beberapa perangkat lunak berikut di sistem Anda sebelum memulai:

- [Node.js](https://nodejs.org/en/download/) (Versi terbaru)
- [Git](https://git-scm.com/)

## Langkah-Langkah Instalasi

Ikuti langkah-langkah di bawah ini untuk memulai proyek ini di mesin lokal Anda.

### 1. Clone Repositori

Jalankan perintah berikut di terminal Anda untuk mengkloning repositori:

```bash
git clone https://github.com/Badrio1707/techno-react.git
```

Setelah kloning selesai, pindah ke direktori proyek:

```bash
cd techno-react
```

### 2. Install Dependensi

Setelah berada di dalam direktori proyek, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

```bash
npm install
```

### 3. Menjalankan Aplikasi

Setelah semua dependensi terinstal, jalankan perintah berikut untuk memulai aplikasi:

```bash
npm start
```

Aplikasi akan berjalan di mode pengembangan dan bisa diakses melalui [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Produksi

Untuk membuat build versi produksi dari aplikasi, jalankan perintah berikut:

```bash
npm run build
```

Ini akan membuat direktori `build` dengan versi produksi aplikasi yang dioptimalkan.

## Strukur Proyek

Berikut adalah gambaran singkat tentang struktur direktori utama dalam proyek ini:

```
techno-react/
├── public/            # Direktori untuk file statis
├── src/               # Direktori untuk sumber kode utama
│   ├── components/    # Direktori untuk semua komponen React
│   ├── redux/         # Direktori untuk setup Redux (actions, reducers, store)
│   ├── styles/        # Direktori untuk file styling
│   └── App.js         # File utama aplikasi
├── .gitignore         # File untuk mengabaikan file/direktori tertentu dari Git
├── package.json       # File yang berisi dependensi dan skrip
└── README.md          # File ini
```
