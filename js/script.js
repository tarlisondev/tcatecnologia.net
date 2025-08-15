const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-items');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('show');
});
