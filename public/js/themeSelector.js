function toggleDarkMode() {
    const html = document.documentElement; // Get the <html> element
    
    // If dark mode is currently on, turn it off, and vice versa
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
    } else {
        html.setAttribute('data-theme', 'dark');
    }
}

// Connect this to your theme toggle button
document.querySelector('.theme-switch').addEventListener('change', toggleDarkMode);