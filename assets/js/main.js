document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Wave Background Functionality
    const canvas = document.getElementById('wave-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let waveHeight = 200; // Adjust wave height
    let waveSpeed = 0.02; // Adjust wave speed
    let waveFrequency = 0.01; // Adjust wave frequency
    let phase = 0;

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create gradient for the wave
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(0, 224, 255, 0.6)');
        gradient.addColorStop(0.5, 'rgba(0, 128, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 224, 255, 0.6)');

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x <= canvas.width; x++) {
            const y =
                canvas.height / 2 +
                waveHeight * Math.sin((x * waveFrequency) + phase);
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.fill();
    }

    function animateWave() {
        phase += waveSpeed;
        drawWave();
        requestAnimationFrame(animateWave);
    }

    // Start the wave animation
    animateWave();
});