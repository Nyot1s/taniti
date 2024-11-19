document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Remove highlight from all items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('highlight'));
        // Add highlight to the clicked item
        this.classList.add('highlight');
        // Navigate to the link
        window.location.href = this.href;
    });
});