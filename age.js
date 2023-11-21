let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

container3.style.display="none";

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
        container2.style.display="none";
    } else {
        window.location.href = "accessonegato.html";
        container2.style.display="none";
        container3.style.display="block";
    }
}
