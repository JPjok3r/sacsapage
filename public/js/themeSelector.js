function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    let themePreference = localStorage.getItem('theme');
    if(themePreference && themePreference === 'dark'){
        document.querySelector('.theme-switch').checked = true;
    }
}

  // Función para alternar el tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    // Guardar el tema en localStorage
    localStorage.setItem('theme', newTheme);
}

  // Cargar el tema al cargar la página
loadTheme();

  // Agregar evento al botón para cambiar el tema
document.querySelector('.theme-switch').addEventListener('change', toggleTheme);


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menuItems.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
            menuToggle.classList.remove('active');
            menuItems.classList.remove('active');
        }
    });
});

