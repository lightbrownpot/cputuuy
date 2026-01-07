document.getElementById("start").addEventListener("click", function() {
    const a = parseInt(document.getElementById("liczba").value);
    const wynikDiv = document.getElementById("wynik");
    wynikDiv.textContent = ""; // czyści poprzedni wynik

    // Sprawdzenie poprawności danych
    if (isNaN(a)) {
        wynikDiv.textContent = "⚠️ Podaj liczbę całkowitą!";
        return;
    }

    let wynik = "";

    for (let i = 1; i <= 30; i++) {
        wynik += i + " ";
        if (i === a && a >= 1 && a <= 30) break;
    }

    wynikDiv.textContent = wynik.trim();
});
