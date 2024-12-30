const portifolioLabel = document.querySelector('label[for="option1"]');
const portifolioLabelAnchor = document.querySelector('.option.-option1 a');
const hiremeLabel = document.querySelector('label[for="option2"]');
const hiremeLabelAnchor = document.querySelector('.option.-option2 a');
const portifolioLabelArrow = document.querySelector('.option.-option1 a img');
const hiremeLabelArrow = document.querySelector('.option.-option2 a img');

portifolioLabelArrow.style.display = 'block';
portifolioLabelAnchor.classList.add('active');


hiremeLabel.addEventListener(
    'mouseover', () => {
        hiremeLabelArrow.style.display = 'block';
        hiremeLabelAnchor.classList.add('active');
        hiremeLabel.classList.add('active');
        portifolioLabelArrow.style.display = 'none';
        portifolioLabelAnchor.classList.remove('active');
    }
);

hiremeLabel.addEventListener(
    'mouseout', () => {
        hiremeLabelArrow.style.display = 'none';
        hiremeLabelAnchor.classList.remove('active');
        hiremeLabel.classList.remove('active');
        portifolioLabelArrow.style.display = 'block';
        portifolioLabelAnchor.classList.add('active');
    }
);

