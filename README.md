# 🚀 Mini Web App: Login & Dashboard Utility (Vanilla JS + Bootstrap 5.3)

Aplikasi web modular sederhana berbasis **Vanilla JavaScript** dan **Bootstrap 5.3** yang dirancang sebagai project portofolio awal. Project ini berfokus pada implementasi autentikasi sisi klien (*Client-Side Auth*), struktur folder multi-direktori, serta fungsionalitas utilitas harian (Kalkulator & Penghitung Usia).

---

## 🛠️ Tech Stack
* **Frontend Framework:** Bootstrap 5.3 (CSS & Bundle JS)
* **Core Language:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Storage:** Browser `localStorage` untuk manajemen sesi login sederhana
* **Version Control:** Git & GitHub

---

## 📂 Project Structure
```text
project-folder/
│
├── login.html              # Halaman utama login
├── Bootstrap/              # Aset lokal Bootstrap 5.3 CSS & JS
├── Javascript/             
│   └── main.js             # Logika autentikasi & validasi login
└── dashboard/              # Folder khusus area setelah login
    ├── kalkulator.html     # Halaman aplikasi kalkulator
    ├── hitungUsia.html     # Halaman aplikasi penghitung usia
    └── Javascript/         
        ├── kalkulator.js   # Logika aritmatika & Auth Guard
        └── hitungUsia.js   # Logika perhitungan tanggal lahir & Auth Guard