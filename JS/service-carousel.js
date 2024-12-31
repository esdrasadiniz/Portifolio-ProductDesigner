document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.service-carousel');
    const track = document.querySelector('.service-carousel .track');
    const cards = document.querySelectorAll('.service-card');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let cardIndex = 0;
    let autoPlayInterval = null;
    let autoPlayPaused = false;

    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(track).gap);

    const setTranslate = (translate) => {
        track.style.transform = `translateX(${translate}px)`;
    };

    const enableTransition = () => {
        track.style.transition = 'transform 0.5s ease';
    };

    const disableTransition = () => {
        track.style.transition = 'none';
    };

    const alignToCard = (index) => {
        currentTranslate = -(index * cardWidth);
        setTranslate(currentTranslate);
        updateIndicators(index);
    };

    const updateIndicators = (activeIndex) => {
        const indicators = document.querySelectorAll('.carousel-indicators .indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === activeIndex);
        });
    };

    const createIndicators = () => {
        cards.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active'); // Ativar o primeiro por padrão
            indicator.addEventListener('click', () => {
                enableTransition();
                cardIndex = index;
                alignToCard(cardIndex);
            });
            indicatorsContainer.appendChild(indicator);
        });
    };

    const nextCard = () => {
        if (cardIndex === cards.length - 1) {
            // Quando o terceiro cartão for exibido, volte imediatamente ao primeiro
            cardIndex = 0;
            disableTransition(); // Desativa a transição para um "pulo" suave
            alignToCard(cardIndex);
            requestAnimationFrame(() => enableTransition()); // Reativa a transição após alinhar
        } else {
            cardIndex++;
            enableTransition();
            alignToCard(cardIndex);
        }
    };

    const startAutoPlay = () => {
        if (autoPlayInterval) return; // Evita múltiplos intervals
        autoPlayInterval = setInterval(() => {
            if (!autoPlayPaused) nextCard();
        }, 3000);
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    };

    const onMouseDown = (event) => {
        isDragging = true;
        startX = event.pageX - currentTranslate;
        disableTransition();
        stopAutoPlay(); // Pausa o auto-play ao arrastar
        autoPlayPaused = true; // Marca como pausado
    };

    const onMouseMove = (event) => {
        if (!isDragging) return;
        const currentX = event.pageX;
        currentTranslate = currentX - startX;
        setTranslate(currentTranslate);
    };

    const onMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        enableTransition();
        cardIndex = Math.round(Math.abs(currentTranslate) / cardWidth);
        alignToCard(cardIndex);
        autoPlayPaused = false; // Pausa o autoplay corretamente no "mouseup", mas será retomado quando o mouse sair
    };

    // Pausar o autoplay enquanto o mouse estiver sobre o carrossel
    carousel.addEventListener('mouseenter', () => {
        autoPlayPaused = true;
    });

    // Retomar o autoplay quando o mouse sair
    carousel.addEventListener('mouseleave', () => {
        autoPlayPaused = false;
    });

    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => onMouseDown(e.touches[0]));
    window.addEventListener('touchmove', (e) => onMouseMove(e.touches[0]));
    window.addEventListener('touchend', onMouseUp);

    // Controla o arraste
    carousel.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    createIndicators(); // Cria os indicadores ao carregar
    alignToCard(cardIndex); // Garante que o carrossel esteja na posição inicial
    startAutoPlay(); // Inicia o auto-play
});
