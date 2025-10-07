document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    let wynik = "";

    // Sprawdzenie, czy liczby są całkowite
    if (!Number.isInteger(A) || !Number.isInteger(B)) {
        wynik = " Podane liczby nie są całkowite! Użyj tylko liczb całkowitych.";
    }
    else if (B === 0) {
        wynik = "⚠ Nie można dzielić przez 0!";
    }
    else {
        const iloraz = A / B;
        wynik = ` Wynik dzielenia ${A} ÷ ${B} = ${iloraz}`;
    }

    document.getElementById('wynik').textContent = wynik;
});
