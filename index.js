let next = document.querySelectorAll('.next');
let previous = document.querySelectorAll('.prev');
let steps = document.querySelectorAll('fieldset');
window.onload = function() {
    for(let i = 0; i<next.length;i++){
        next[i].classList.add('js');
    }
    for(let i = 0; i<previous.length;i++){
        previous[i].classList.add('js');
    }
    for(let i = 0; i<steps.length;i++){
        steps[i].classList.add('js');
        if(i != 0){
            steps[i].classList.remove('current-step');
        }
    }
    document.querySelector('form').classList.add('js');
    document.querySelector('.submit').classList.add('js');
}
//document.body.classList.add('js-enabled')


for(let i = 0; i < next.length; i++) {
    let thisButton = next[i];
    thisButton.addEventListener("click",() => {
        let btn = thisButton;
        let fieldset = btn.closest('.step');
        fieldset.classList.toggle('slideoutNext');
        setTimeout(() => {
            fieldset.classList.toggle('current-step');
        },300);
        setTimeout(() => {
            fieldset.nextElementSibling.classList.toggle('slideinNext');
            fieldset.nextElementSibling.classList.toggle('current-step');
        },100);
        setTimeout(() => {
            fieldset.classList.toggle('slideoutNext');
            fieldset.nextElementSibling.classList.toggle('slideinNext');
        },1000);
    });
}

for(let i = 0; i < previous.length; i++) {
    let thisButton = previous[i];
    thisButton.addEventListener("click",() => {
        let btn = thisButton;
        let fieldset = btn.closest('.step');
        fieldset.classList.toggle('slideout');
        setTimeout(() => {
            fieldset.classList.toggle('current-step');
        },300);
        setTimeout(() => {
            fieldset.previousElementSibling.classList.toggle('slidein');
            fieldset.previousElementSibling.classList.toggle('current-step');
        },100);
        setTimeout(() => {
            fieldset.classList.toggle('slideout');
            fieldset.previousElementSibling.classList.toggle('slidein');
        },1000);
    });
}

