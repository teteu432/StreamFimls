function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
}






// Função 1 - getElementById()

function selecionarPorId() {
    const elemento = document.getElementById("titulo-filme");

    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    hl("titulo-filme", "elemento-selecionado");
    hl("#filme-principal", "elemento-selecionado")
}

//FUNÇÃO 2- getElementsByClassName()

function selecionarPorClasse() {
    const elementos = document.getElementsByClassName("genero-acao");
    console.log("Quantidade:", elementos.length)

    for (let i = 0; i < elementos.length; i++) {
        console.log("Quantidade:", elementos[i].textContent.trim());
    }

    hl(".genero-acao", "highlight-acao", 2500);
    hl(".genero-drama", "highlight-acao", 2500);

}

function selecionarPorQuery() {
    const elemento = document.querySelector(".filme-mini")

    console.log(elemento)
    console.log("Quantidade:", elemento.textContent.trim());
    hl(elemento, "elemento-selecionado");
}

//função 4 - querySelectorALL()

function selecionarTodos() {
    const elementos = document.querySelectorAll(".filme-mini");

    console.log("Quantidade:", elementos.length);

    elementos.forEach((el, indice) => {
        console.log(indice, el.textContent.trim())
    });

    elementos.forEach((el, i) => hl(el, "elemento-selecionado", 2500, i * 300))
}

//FUNÇÃO 1 - textContent
function mudarTexto() {
    const titulo = document.getElementById("titulo-destaque");

    titulo.textContent = "Caçador de monstros brabão"
    console.log("Novo texto: ", titulo.textContent)

    titulo.classList.add("texto-animado")
    setTimeout(() => titulo.classList.remove("texto-animado"), 1500)
    hl("#titulo-destaque", "elemento-selecionado", 2000)

}

//Função 2 - createElement

function adicionarBadge() {
    const badge = document.createElement("spam")

    badge.className = "badge";
    badge.textContent = "🌟Em alta🌟"

    const container = document.getElementById("badge-container")

    container.innerHTML = ""

    container.appendChild(badge)

    console.log(badge)

}