window.addEventListener('load', () => {
    Swal.fire({
        title: 'gk nggo musik ra??',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Bowlehh😊',
        cancelButtonText: 'Emohhh🐄',
    }).then((result) => {
        if (result.isConfirmed) {
            // Pastikan audio diputar setelah konfirmasi
            const audio = document.querySelector('.song');
            audio.play().catch(error => {
                console.log("Audio failed to play:", error);
            });
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});
