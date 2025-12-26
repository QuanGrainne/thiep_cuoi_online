// Active navbar highlight
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
new bootstrap.Carousel('#aboutCarousel', {
  interval: 2200,
  ride: 'carousel',
  pause: false
});

const aboutCarousel = document.querySelector('#aboutCarousel');
if (aboutCarousel) {
    new bootstrap.Carousel(aboutCarousel, {
        interval: 2200,
        ride: 'carousel',
        pause: false
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openGift");
    const closeBtn = document.getElementById("closeGift");
    const modal = document.getElementById("giftModal");

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
    if (openBtn) {
        openBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Đóng modal khi click ra ngoài vùng nội dung
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

function copyText(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("Đã sao chép số tài khoản!");
}
