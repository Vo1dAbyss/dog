document.addEventListener("DOMContentLoaded", () => {
    const enterFullscreen = () => {
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
        } else if (document.body.msRequestFullscreen) {
            document.body.msRequestFullscreen();
        } else {
            alert("Fullscreen is not supported in this browser.");
        }
    };

    document.body.addEventListener("click", () => {
        enterFullscreen();
        const music = document.getElementById('backgroundMusic');
        if (music.paused) {
            music.play().catch((error) => {
                console.error('Failed to play audio:', error);
            });
        }
    }, { once: true });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            enterFullscreen();
        }
    }, { once: true });
});