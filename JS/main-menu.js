// Seleciona todos os botões do menu
const menuButtons = document.querySelectorAll('.menu .menu-button');
// Seleciona todas as seções
const sections = document.querySelectorAll('section');

// Configura o Intersection Observer
const observerOptions = {
  root: null, // Usa a viewport como root
  threshold: 0.5, // A seção é considerada visível se 50% dela estiver na tela
};

// Função para observar as seções
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Verifica se a seção está visível
    if (entry.isIntersecting) {
      // Remove a classe 'active' de todos os botões
      menuButtons.forEach(button => button.classList.remove('active'));
      // Adiciona a classe 'active' ao botão correspondente
      const activeButton = document.querySelector(`.menu .menu-button[href="#${entry.target.id}"]`);
      if (activeButton) {
        activeButton.classList.add('active');
      }
    }
  });
}, observerOptions);

// Observa cada seção
sections.forEach(section => observer.observe(section));
