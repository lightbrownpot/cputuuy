document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const wynik = document.getElementById("wynik");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // zapobiega przeładowaniu strony

        // Pobieranie wartości z inputów i zamiana na liczby
        const liczba1 = parseFloat(document.getElementById("liczba1").value);
        const liczba2 = parseFloat(document.getElementById("liczba2").value);
        const liczba3 = parseFloat(document.getElementById("liczba3").value);
        const liczba4 = parseFloat(document.getElementById("liczba4").value);

        // Sprawdzenie czy wszystkie pola są wypełnione liczbami
        if (isNaN(liczba1) || isNaN(liczba2) || isNaN(liczba3) || isNaN(liczba4)) {
            wynik.textContent = "Proszę wpisać wszystkie 4 liczby!";
            wynik.style.color = "red";
            return;
        }

        // Obliczanie średniej
        const srednia = (liczba1 + liczba2 + liczba3 + liczba4) / 4;

        // Wyświetlanie wyniku
        wynik.textContent = `Średnia podanych liczb to: ${srednia}`;
        wynik.style.color = "green";
    });
});
