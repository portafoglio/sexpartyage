function verificateAge() {
    let dataNascita = document.getElementById("dateAge").value;

    if (!dataNascita) {
        alert("Inserisci la data di nascita.");
        return;
    }

    let dataNascita_x = new Date(dataNascita);
    let annoCorrente = new Date().getFullYear();
    let eta = annoCorrente - dataNascita_x.getFullYear();

    if (eta >= 18) {
        window.location.href = "terminiecondizioni.html";
    } else {
        window.location.href = "accessonegato.html";
    }
}
