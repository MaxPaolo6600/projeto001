function enviar() {
    let texto = document.getElementById("texto").value;
    let email = document.getElementById("email").value;
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.push({
        texto: texto,
        email: email
    });
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    window.location.href = "../../pages/comentarios.html";
}

window.onload = function () {
    let container = document.getElementById("lista-comentarios");
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.forEach(function (item) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${item.texto}</h3>
            <p>${item.email}</p>
        `;
        container.appendChild(card);
    });
};