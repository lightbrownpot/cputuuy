document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const x = parseFloat(document.getElementById('x').value);
    const y = (x ** 2) / ((1 + Math.abs(x)) ** 2);

    document.getElementById('wynik').textContent =
        "Dla x = " + x + " wartość wyrażenia wynosi: " + y.toFixed(4);
});
