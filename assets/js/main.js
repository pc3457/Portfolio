document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Moving Background Functionality
    const canvas = document.getElementById("wave-canvas"); // Reusing the canvas element
    const ctx = canvas.getContext("2d");

    // Navbar functionality
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            navbar.style.transform = "translateY(-100%)"; // Move navbar out of view
        } else {
            // Scrolling up
            navbar.style.transform = "translateY(0)"; // Bring navbar back into view
        }
        lastScrollY = window.scrollY; // Update lastScrollY
    });

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Gradient position variables
    let gradientPositionX = 0;
    let gradientPositionY = 0;
    const speedX = 0.5; // Horizontal movement speed
    const speedY = 0.3; // Vertical movement speed

    // Resize canvas dynamically on window resize
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function drawGradientBackground() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create a dynamic gradient
        const gradient = ctx.createLinearGradient(
            gradientPositionX,
            gradientPositionY,
            canvas.width + gradientPositionX,
            canvas.height + gradientPositionY
        );
        gradient.addColorStop(0, "#005fa3"); // Blue shade
        gradient.addColorStop(0.5, "#00e0ff"); // Neon blue
        gradient.addColorStop(1, "#005fa3"); // Blue shade

        // Fill the canvas with the gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update gradient position
        gradientPositionX += speedX;
        gradientPositionY += speedY;

        // Reset gradient position for seamless looping
        if (gradientPositionX > canvas.width) gradientPositionX = 0;
        if (gradientPositionY > canvas.height) gradientPositionY = 0;

        // Call the draw function on the next frame
        requestAnimationFrame(drawGradientBackground);
    }

    // Start the gradient animation
    drawGradientBackground();
});