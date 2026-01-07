const obrazek = document.querySelector('#obrazek');
const kolor = document.querySelector('#kolor');
const grubosc = document.querySelector('#grubosc');
const Btn = document.querySelector('#button');

Btn.addEventListener('click', e => {
    const Kolor = kolor.value;
    const grubosc = grubosc.value;

    obrazek.style.border = `${Grubosc}px solid ${Kolor}`;
    obrazek.style.boxShadow = `0 0 10px ${Kolor}`;
})