window.addEventListener('scroll', function () {
  let sections = document.querySelectorAll('section');
  let links = document.querySelectorAll('.menu-button');
  let menu = document.querySelector('.main-menu'); // Pega o menu

  // Posição do menu
  let menuRect = menu.getBoundingClientRect();

  let maxVisibleArea = 0; // Armazenar a maior área visível da seção
  let currentSectionIndex = -1; // Para armazenar o índice da seção ativa

  sections.forEach(function (section, index) {
      let rect = section.getBoundingClientRect();
      
      // Calcula a área visível da seção
      let visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      // Se a seção tem uma área visível maior que a anterior, essa será a nova ativa
      if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          currentSectionIndex = index;
      }
  });

  // Remove a classe 'on-section' de todos os links
  links.forEach(function (link) {
      link.classList.remove('on-section');
  });

  // Adiciona a classe 'on-section' ao link correspondente à seção ativa
  if (currentSectionIndex !== -1) {
      links[currentSectionIndex].classList.add('on-section');
  }
});
