// Get the button elements
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Function to add wiggle effect and create heart
function wiggleAndCreateHeart(x, y) {
    noButton.classList.add('wiggle'); // Add wiggle class
    createHeart(x, y); // Create heart at specified position

    // Remove wiggle class after animation completes
    setTimeout(() => {
        noButton.classList.remove('wiggle');
    }, 500); // Duration of the wiggle animation
}

// Function to move the button and create heart
function moveButton() {
    const container = document.querySelector('.container');

    // Get the dimensions of the container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Get the dimensions of the button
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;

    // Calculate random positions within the container
    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    // Create heart at the current position of the button before it moves
    wiggleAndCreateHeart(noButton.offsetLeft + buttonWidth / 2, noButton.offsetTop + buttonHeight / 2);

    // Set the new position of the button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Add event listener for mouseover (desktop)
noButton.addEventListener('mouseover', moveButton);

// Add event listener for click (mobile)
noButton.addEventListener('click', moveButton);

// Function to create heart
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

// Function to go to the next page
function goToNextPage() {
    window.location.href = 'yes.html'; // Change 'yes.html' to the URL of the next page
}

// Add event listener for the Yes button
yesButton.addEventListener('click', goToNextPage);