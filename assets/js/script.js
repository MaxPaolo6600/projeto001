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

async function carregarDados() {
    try {
        const infos = await fetch("../assets/js/dados.json");
        const data = await infos.json();

        const tela = document.getElementById("listaCorridas");
        data.events.forEach(event => {
            const div = document.createElement("div");
            div.classList.add("cardInfo");
            div.innerHTML = `
                <h1 class="cardText1">${event.round} ${event.name}</h1>
                <h3 class="cardText2">${event.location}</h3>
                <h3 class="cardText2">Vencedor: <span>${event.winner.driver}</span> da equipe <span>${event.winner.team}</span></h3>
            `;
            tela.appendChild(div);
        });
    } catch (error) {
        console.log("deu ruim");
    }
}
carregarDados();