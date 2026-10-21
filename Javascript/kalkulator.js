// === PENJAGA HALAMAN (AUTH GUARD) ===
const statusLogin = localStorage.getItem('isLoggedIn');

// Jika user belum login (statusLogin tidak ada / bukan true)
if (statusLogin !== 'true') {
    alert('Akses ditolak! Silakan login terlebih dahulu.');
    window.location.href = '../login.html'; // Tendang balik ke halaman login
}


const kalkulatorForm = document.getElementById('kalkulatorForm');
const hasilKalkulator = document.getElementById('hasilKalkulator');

if (kalkulatorForm) {
    kalkulatorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Konversi string input menjadi angka (float)
        const angka1 = parseFloat(document.getElementById('angka1').value);
        const angka2 = parseFloat(document.getElementById('angka2').value);
        const operator = document.getElementById('operator').value;

        let hasil = 0;

        // Tentukan operasi matematika berdasarkan value select option
        switch (operator) {
            case 'tambah':
                hasil = angka1 + angka2;
                break;
            case 'kurang':
                hasil = angka1 - angka2;
                break;
            case 'kali':
                hasil = angka1 * angka2;
                break;
            case 'bagi':
                if (angka2 === 0) {
                    hasilKalkulator.textContent = 'Tidak bisa dibagi 0!';
                    return;
                }
                hasil = angka1 / angka2;
                break;
            default:
                hasil = 0;
        }

        // Tampilkan hasil ke tag <h3>
        hasilKalkulator.textContent = hasil;
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