
document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.slides');
  const items = document.querySelectorAll('.slide');
  
  // Duplicar los elementos para crear un efecto infinito
  items.forEach(item => {
    const clone = item.cloneNode(true);
    carouselContainer.appendChild(clone);
  });

  // Ajustar la animación para que sea más fluida
  const totalItems = document.querySelectorAll('.slide').length;
  const animationDuration = 20; // Duración en segundos
  const itemWidthPercentage = 100 / totalItems;
  
  document.styleSheets[0].insertRule(`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-${itemWidthPercentage * totalItems}%);
      }
    }
  `, document.styleSheets[0].cssRules.length);
});
