function moveButton() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');

    // Add wiggle class to the button
    button.classList.add('wiggle');

    // Get the dimensions of the container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Get the dimensions of the button
    const buttonWidth = button.clientWidth;
    const buttonHeight = button.clientHeight;

    // Calculate random positions within the container
    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    // Set the new position of the button
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Get the button element
const button = document.getElementById('noButton');

// Function to add wiggle effect and create heart
function wiggleAndCreateHeart(x, y) {
    button.classList.add('wiggle'); // Add wiggle class
    createHeart(x, y); // Create heart at specified position

    // Create heart at the current position of the button before it moves
    wiggleAndCreateHeart(button.offsetLeft + buttonWidth / 2, button.offsetTop + buttonHeight / 2);
    
    // Remove wiggle class after animation completes
    setTimeout(() => {
        button.classList.remove('wiggle');
    }, 500); // Duration of the wiggle animation

}

// Add event listener for mouseover (desktop)
button.addEventListener('mouseover', () => {
    wiggleAndCreateHeart(button.offsetLeft + button.offsetWidth / 2, button.offsetTop + button.offsetHeight / 2);
});

// Add event listener for click (mobile)
button.addEventListener('click', () => {
    wiggleAndCreateHeart(button.offsetLeft + button.offsetWidth / 2, button.offsetTop + button.offsetHeight / 2);
});

function createHeart(x, y) {
    const heart = document.createElement('img'); // Create an image element
    heart.src = 'heart.png'; // Set the source to your heart image
    heart.classList.add('heart'); // Add the heart class for animation
    heart.style.position = 'absolute';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 1000); // Duration of the heart animation
}

function goToNextPage() {
    window.location.href = 'yes.html'; // Change 'yes.html' to the URL of the next page
}