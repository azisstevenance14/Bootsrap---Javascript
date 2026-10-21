// === CEK APAKAH SUDAH LOGIN ===
const statusLogin = localStorage.getItem('isLoggedIn');

// Jika statusnya sudah true (sudah login), jangan biarkan buka halaman login!
if (statusLogin === 'true') {
    // Langsung arahkan balik ke halaman dashboard/kalkulator
    window.location.href = 'dashboard/kalkulator.html';
}


// Menangkap elemen form login
const loginForm = document.getElementById('loginForm');
const alertMessage = document.getElementById('alertMessage');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form reload otomatis

        // Ambil nilai dari input
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Contoh kredensial dummy
        const validUsername = "Azis";
        const validPassword = "AzisAnce14";

        // Cek kecocokan
        if (username === validUsername && password === validPassword) {
            // Simpan status login di localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', username);

            // Sembunyikan pesan alert jika sebelumnya ada
            alertMessage.classList.add('d-none');

            // Redirect ke halaman kalkulator di dalam folder dashboard
            window.location.href = 'dashboard/kalkulator.html';
        } else {
            // Tampilkan pesan error di alert card
            alertMessage.textContent = 'Username atau password salah!';
            alertMessage.classList.remove('d-none');
        }
    });
}