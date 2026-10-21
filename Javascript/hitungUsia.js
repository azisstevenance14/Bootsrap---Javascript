// === PENJAGA HALAMAN (AUTH GUARD) ===
const statusLogin = localStorage.getItem('isLoggedIn');

// Jika user belum login (statusLogin tidak ada / bukan true)
if (statusLogin !== 'true') {
    alert('Akses ditolak! Silakan login terlebih dahulu.');
    window.location.href = '../login.html'; // Tendang balik ke halaman login
}



const usiaForm = document.getElementById('usiaForm');
const hasilUsia = document.getElementById('hasilUsia');

if (usiaForm) {
    usiaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputTanggal = document.getElementById('tanggalLahir').value;
        if (!inputTanggal) return;

        const tanggalLahir = new Date(inputTanggal);
        const hariIni = new Date();

        // Hitung selisih tahun
        let tahun = hariIni.getFullYear() - tanggalLahir.getFullYear();
        let bulan = hariIni.getMonth() - tanggalLahir.getMonth();
        let hari = hariIni.getDate() - tanggalLahir.getDate();

        // Penyesuaian jika hari atau bulan belum terlewati di tahun ini
        if (hari < 0) {
            bulan--;
            // Ambil jumlah hari di bulan sebelumnya
            const bulanLalu = new Date(hariIni.getFullYear(), hariIni.getMonth(), 0);
            hari += bulanLalu.getDate();
        }

        if (bulan < 0) {
            tahun--;
            bulan += 12;
        }

        // Tampilkan format teks usia lengkap
        hasilUsia.textContent = `${tahun} Tahun, ${bulan} Bulan, ${hari} Hari`;
    });
}

// === LOGIKA LOGOUT ===
const btnLogout = document.getElementById('btnLogout');

if (btnLogout) {
    btnLogout.addEventListener('click', function(event) {
        event.preventDefault(); // Cegah link bawaan agar tidak loncat sembarangan

        // 1. Hapus data sesi login di browser
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');

        // 2. Lempar kembali ke halaman login di luar folder dashboard
        window.location.href = '../login.html';
    });
}