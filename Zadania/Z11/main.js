function procentZliczby(liczba, procent) {
    return liczba * procent /100;
}////////////////////////////////////////

console.log(procentZliczby(120,50))
console.log(procentZliczby(120,0))
console.log(procentZliczby(120,100))

const liczba = document.querySelector('#liczba');
const procent = document.querySelector('#procent');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function ()  {
    let licz = parseFloat(liczba.value);
    let proc = parseFloat(procent.value);

    let procentLiczba = procentZliczby(licz, proc);

    wynik.innerHTML =
        `
        podana liczba ${licz}<br>
        podany procent ${proc}%<br>
        obliczony procent z liczby: <b>${procentLiczba}</b>
        `
})