function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

document.getElementById("show").addEventListener("click", function() {
    const input = document.getElementById("fullname").value.trim();
    const [firstNameRaw, lastNameRaw] = input.split(" ");
    const firstName = capitalize(firstNameRaw);
    const lastName = capitalize(lastNameRaw);
    document.getElementById("result").textContent =
        `Twoje imię to: ${firstName}, a nazwisko: ${lastName}.`;
});
