document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const x3 = parseFloat(document.getElementById('x3').value);
    const y3 = parseFloat(document.getElementById('y3').value);

    const pole = Math.abs(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2;

    let wynik = "";

    if (pole === 0) {
        wynik = " Podane punkty nie tworzą trójkąta.";
    } else {
        wynik = " Pole trójkąta wynosi: " + pole.toFixed(2);
    }

    document.getElementById('wynik').textContent = wynik;
});
