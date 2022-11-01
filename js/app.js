const toggleMenu = document.querySelector('#toggle-menu');
const toggleMenuIcon = toggleMenu.querySelector('img');
const menu = document.querySelector('#menu');
toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-y-[-200%]')
    changeMenuIcon();
})

// close menu when click on menu list
const navlinks = document.querySelectorAll('.nav-links');
navlinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        menu.classList.add('translate-y-[-200%]');
        changeMenuIcon();
    })
})

function changeMenuIcon() {
    const isContainTranslate = menu.classList.contains('translate-y-[-200%]');
    const icon = isContainTranslate ? 'menu-item' : 'close';
    toggleMenuIcon.src = `/img/menu-items/${icon}.png`;
}

// Toggle theme

const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');

toggleTheme.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    const themeIcon = isDark ? 'light-theme' : 'dark-theme';
    toggleThemeIcon.src = `/img/menu-items/${themeIcon}.png`;
});