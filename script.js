document.addEventListener('DOMContentLoaded', function() {
  const submenuItems = document.querySelectorAll('.has-submenu > a');

  submenuItems.forEach(item => {
      item.addEventListener('click', function(e) {
          const parent = this.parentElement;

          // Si el clic es en el enlace del submenú principal, entonces no redirige
          if (parent.querySelector('.submenu')) {
              e.preventDefault();
              parent.classList.toggle('active');
          }
      });
  });
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.container-items ').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.container-items ').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
});

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.container-items ').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
});
