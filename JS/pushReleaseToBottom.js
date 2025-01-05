const bannerTextBox = document.querySelector('.main-section.-banner-section .text-box');
const bannerMainTitle = document.querySelector('.main-section.-banner-section .main-title');
const bannerImg = document.querySelector('.main-section.-banner-section .banner-photo');
const bannerImgHover = document.querySelector('.main-section.-banner-section .banner-photoHover');
const bannerquoteUp = document.querySelector('.main-section.-banner-section .quote-up');
const bannerExpQuote = document.querySelector('.main-section.-banner-section .experience-quote');

// Quando o mouse entra na imagem
bannerImg.addEventListener('mouseover', () => {
    bannerImgHover.classList.add('show'); // Torna o bannerImgHover visível com transição suave
});

// Quando o mouse entra sobre o bannerImgHover
bannerImgHover.addEventListener('mouseover', () => {
    bannerTextBox.classList.add('cssanimation', 'pushReleaseToBottom');
    bannerMainTitle.classList.add('cssanimation', 'pushReleaseToBottom');
    bannerquoteUp.classList.add('up');
    bannerExpQuote.classList.add('up');
});

// Quando o mouse sai do bannerImgHover
bannerImgHover.addEventListener('mouseout', () => {
    bannerTextBox.classList.remove('cssanimation', 'pushReleaseToBottom');
    bannerMainTitle.classList.remove('cssanimation', 'pushReleaseToBottom');
    bannerTextBox.classList.add('cssanimation', 'pushReleaseFromBottom');
    bannerMainTitle.classList.add('cssanimation', 'pushReleaseFromBottom');
    bannerExpQuote.classList.remove('up');
    bannerquoteUp.classList.remove('up');
    bannerImgHover.classList.remove('show'); // Esconde o bannerImgHover com transição suave
});
