window.onscroll = function () { toggleScrollTopButton(); };

function toggleScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus();
}

// Function to open the lightbox
function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active'); // Add the "active" class to make the lightbox visible
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active'); // Remove the "active" class to hide the lightbox
}

// Optional: Close lightbox when clicking outside the content
document.getElementById('lightbox').addEventListener('click', function (event) {
    if (event.target === this) {
        closeLightbox();
    }
});

// function addSpotifyPreview(container, spotifyUrl) {
//     const trackId = spotifyUrl.split('track/')[1]?.split('?')[0];
//     if (trackId) {
//         const iframe = document.createElement('iframe');
//         iframe.src = `https://open.spotify.com/embed/track/${trackId}`;
//         iframe.width = "300";
//         iframe.height = "80";
//         iframe.allow = "encrypted-media";
//         iframe.style.borderRadius = "10px";
//         container.appendChild(iframe);
//     }
// }

// // Example usage
// const textBox = document.querySelector('.text-box-media div');
// addSpotifyPreview(textBox, 'https://open.spotify.com/track/{TRACK_ID}');
