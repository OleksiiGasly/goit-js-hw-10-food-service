import './sass/main.scss';
import menu from './menu.json';
import menuTemplate from './templates/menu.hbs';

const refs = {
    menuEl: document.querySelector('.js-menu'),
    bodyEl: document.querySelector('body'),
    themeSwitchEl: document.querySelector('#theme-switch-toggle'),
};

refs.menuEl.innerHTML = menuTemplate(menu);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

refs.bodyEl.classList.add(Theme.LIGHT);

updateTheme();

refs.themeSwitchEl.addEventListener('change', onToggleClick);

function onToggleClick() {
    refs.bodyEl.classList.toggle(Theme.DARK);
    refs.bodyEl.classList.toggle(Theme.LIGHT);

    const currentTheme = refs.bodyEl.classList.value;
    localStorage.setItem('Theme', currentTheme);
}

function updateTheme() {
    const setTheme = localStorage.getItem('Theme');

    if (setTheme === Theme.DARK) {
        refs.themeSwitchEl.checked = 'true';
        onToggleClick();
    }
}
