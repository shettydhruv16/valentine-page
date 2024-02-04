document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const confettiContainer = document.getElementById('confetti-container');

    noButton.addEventListener('click', function () {
        // No button doesn't do anything
    });

    yesButton.addEventListener('click', function () {
        // Trigger confetti
        particlesJS('confetti-container', {
            particles: {
                number: { value: 150 },
                size: { value: 3 },
                color: { value: '#ff3366' },
                line_linked: { enable: false },
                move: { enable: true, speed: 2, direction: 'top', random: true },
            },
        });
        
        // Display an image or any additional content when Yes is clicked
        const confettiImage = document.createElement('img');
        confettiImage.src = 'confetti_image.jpg'; // Replace with your confetti image
        confettiContainer.appendChild(confettiImage);
    });
});
