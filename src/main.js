import './style.css'

const themeToggle = document.querySelector('.theme-toggle')
const menuToggle = document.querySelector('.menu-toggle')
const siteNav = document.querySelector('.site-nav')
const navLinks = document.querySelectorAll('.site-nav a')
const year = document.querySelector('[data-current-year]')
const storedTheme = localStorage.getItem('theme')
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

document.documentElement.dataset.theme = storedTheme || preferredTheme

function updateThemeButton() {
  const isDark = document.documentElement.dataset.theme === 'dark'
  themeToggle.setAttribute('aria-pressed', String(isDark))
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`)
  themeToggle.querySelector('[data-theme-label]').textContent = isDark ? 'Light' : 'Dark'
}

updateThemeButton()
themeToggle.addEventListener('click', () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', document.documentElement.dataset.theme)
  updateThemeButton()
})
menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
})
navLinks.forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open')
  menuToggle.setAttribute('aria-expanded', 'false')
}))
year.textContent = new Date().getFullYear()
