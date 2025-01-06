document.addEventListener("DOMContentLoaded", () => {
    // Navbar hide/show functionality
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // User is scrolling down
            navbar.classList.add("hidden");
        } else {
            // User is scrolling up
            navbar.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    });

    // Dynamic Moving Background Functionality
    const canvas = document.getElementById("wave-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradientPositionX = 0;
    let gradientPositionY = 0;
    const speedX = 0.5;
    const speedY = 0.3;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function drawGradientBackground() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const gradient = ctx.createLinearGradient(
            gradientPositionX,
            gradientPositionY,
            canvas.width + gradientPositionX,
            canvas.height + gradientPositionY
        );
        gradient.addColorStop(0, "#001f3f");
        gradient.addColorStop(0.5, "#003f7f");
        gradient.addColorStop(1, "#001f3f");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        gradientPositionX += speedX;
        gradientPositionY += speedY;

        if (gradientPositionX > canvas.width) gradientPositionX = 0;
        if (gradientPositionY > canvas.height) gradientPositionY = 0;

        requestAnimationFrame(drawGradientBackground);
    }

    drawGradientBackground();
});