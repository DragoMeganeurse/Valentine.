function moveButton() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');

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

function goToNextPage() {
    window.location.href = 'yes.html'; // Replace 'nextPage.html' with the actual URL of the next page
}