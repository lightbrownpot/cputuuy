document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const wynik = document.getElementById("wynik");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const l1 = parseFloat(document.getElementById("liczba1").value);
        const l2 = parseFloat(document.getElementById("liczba2").value);
        const l3 = parseFloat(document.getElementById("liczba3").value);
        const l4 = parseFloat(document.getElementById("liczba4").value);

        if (isNaN(l1) || isNaN(l2) || isNaN(l3) || isNaN(l4)) {
            wynik.textContent = " Proszę wpisać wszystkie liczby!";
            wynik.style.color = "red";
            return;
        }

        if (l1 < 0 || l2 < 0 || l3 < 0 || l4 < 0) {
            wynik.textContent = "️ Średnia geometryczna nie jest zdefiniowana dla liczb ujemnych!";
            wynik.style.color = "orange";
            return;
        }

        const srednia = Math.pow(l1 * l2 * l3 * l4, 1 / 4);
        wynik.textContent = ` Średnia geometryczna wynosi: ${srednia.toFixed(4)}`;
        wynik.style.color = "green";
    });
});
