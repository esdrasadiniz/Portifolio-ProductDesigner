const portifolioLabel = document.querySelector('label[for="option1"]');
const portifolioLabelAnchor = document.querySelector('.option.-option1 a');
const hiremeLabel = document.querySelector('label[for="option2"]');
const hiremeLabelAchor = document.querySelector('.option.-option2 a');
const portifolioLabelArrow = document.querySelector('.option.-option1 a img');
const hiremeLabelArrow = document.querySelector('.option.-option2 a img');


hiremeLabel.addEventListener(
    'mouseover', () => {
        portifolioLabelAnchor.classList.add('hireme-label');
        hiremeLabelArrow.style.display = 'block';
        portifolioLabelArrow.style.display = 'none';
        hiremeLabelAchor.classList.add('active');
        hiremeLabel.classList.add('active');
        portifolioLabelAnchor.classList.remove('active');
        hiremeLabelAchor.style.justifyContent = 'center';
    }
);

hiremeLabel.addEventListener(
    'mouseout', () => {
        portifolioLabelAnchor.classList.remove('hireme-label');
        portifolioLabelArrow.style.display = 'block';
        hiremeLabelArrow.style.display = 'none';
        portifolioLabelAnchor.classList.add('active');
        hiremeLabelAchor.classList.remove('active');
    }
);

