document.addEventListener('DOMContentLoaded', function() {
    // Initialize the turn.js library
    $('#your-book-container').turn({
        width: 800, // Set the width of your pages
        height: 600, // Set the height of your pages
        autoCenter: true,
        display: 'double', // Use double pages
    });
});
