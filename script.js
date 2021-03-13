const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const progress1 = document.querySelector('#progress1');
const progress2 = document.querySelector('#progress2');
const progress3 = document.querySelector('#progress3');
const allProgressDivs = document.getElementsByClassName('progress');
const allNumDivs = document.getElementsByClassName('numberStyle');

// create some variables
let count = 0;


function checkCircles(num2) {
    if (num2.style.border = '3px solid #e0e0e0') {
        btnPrev.style.backgroundColor = '#e0e0e0';
        btnPrev.style.cursor = 'not-allowed';
    } // checks if user just opened site
}  
checkCircles(num2);

function setStyletoButtonsOnClick() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.985)';
        })
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.0)';
        })
    })
}

setStyletoButtonsOnClick();


function clickToBtnNext() {
    btnNext.onclick = () => {
        checkBtnNextvStyleState();
    }
}

clickToBtnNext();

function setBtnPrevStyle() {
    if (progress1.style.backgroundColor === 'rgb(224, 224, 224)') {
        btnPrev.style.backgroundColor = '#e0e0e0';
        btnPrev.style.cursor = 'not-allowed';
    }
    else {
        btnPrev.style.backgroundColor = '#3498db';
        btnPrev.style.cursor = 'pointer';
    }
}


function setBtnNextStyle() {
    if (progress3.style.backgroundColor == 'rgb(52, 152, 219)') {
        btnNext.style.backgroundColor = '#e0e0e0';
        btnNext.style.cursor = 'not-allowed';
    }
    else {
        btnNext.style.backgroundColor = '#3498db';
        btnNext.style.cursor = 'pointer';
    }
}


function clickToBtnPrev() {
    btnPrev.onclick = () => {
        checkBtnPrevStyleState();
    }
}

clickToBtnPrev();

function checkBtnPrevStyleState() {
    if (btnPrev.style.backgroundColor == 'rgb(224, 224, 224)') {
        return;
    }
    else {
        allNumDivs[count].style.border = '3px solid #e0e0e0';
        count--;
        allProgressDivs[count].style.backgroundColor = '#e0e0e0';
        setBtnPrevStyle();
        setBtnNextStyle();
    }
}

function checkBtnNextvStyleState() {
    if (btnNext.style.backgroundColor == 'rgb(224, 224, 224)') {
        return;
    }
    else {
        allProgressDivs[count].style.backgroundColor = '#3498db';
        setBtnPrevStyle();
        setBtnNextStyle();
        count++;
        allNumDivs[count].style.border = '3px solid #3498db';
    }
}