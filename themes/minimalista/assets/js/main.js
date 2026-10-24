// Loaded synchronously in <head>, so the theme is set before first paint.
const root = document.documentElement;
const dark = matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = localStorage.getItem('theme') || (dark ? 'dark' : 'light');

document.addEventListener('click', (e) => {
  if (!e.target.closest('#theme-toggle')) return;
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
});
