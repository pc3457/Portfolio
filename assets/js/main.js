document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Text for Hero Section
    const skills = ["Full-Stack Developer", "Cloud Enthusiast", "Problem Solver", "Backend Specialist"];
    let currentSkill = 0;

    function updateDynamicText() {
        const dynamicText = document.getElementById("dynamic-text");

        // Safeguard in case the element is missing
        if (!dynamicText) return;

        // Update text
        dynamicText.textContent = skills[currentSkill];

        // Move to next skill
        currentSkill = (currentSkill + 1) % skills.length;

        // Change text every 2 seconds
        setTimeout(updateDynamicText, 2000);
    }

    // Initialize dynamic text updates
    updateDynamicText();

    // Dynamic Glowing Wave Background
    const canvas = document.getElementById('wave-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let waveHeight = 200;
    let waveSpeed = 0.02;
    let waveFrequency = 0.01;
    let phase = 0;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    animateWave();
});