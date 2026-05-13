document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil elemen tombol dan elemen musik
    const tombolKlik = document.querySelector('.flag_birthday') || document.querySelector('.content'); 
    const musik = document.getElementById('bg-music');

    // 2. Deteksi ketika tombol atau area kartu diklik
    if (tombolKlik) {
        tombolKlik.addEventListener('click', function () {
            // 3. Putar musik
            if (musik) {
                musik.play().catch(function(error) {
                    console.log("Musik tertunda sampai interaksi penuh:", error);
                });
            }
            
            // 4. Tambahkan efek membuka kartu (jika template membutuhkan class aktif)
            const wrapper = document.getElementById('wrapper');
            if (wrapper) {
                wrapper.classList.add('open');
            }
        });
    }
});