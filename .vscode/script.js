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

// FUNÇÃO 1 — getElementById()
function selecionarPorId() {
    const elemento = document.getElementById("titulo-filme");

    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    hl("#titulo-filme", "elemento-selecionado");
    hl("#filme-principal", "elemento-selecionado");
}

//FUNÇÃO 2 — getElementsByClassName()
function selecionarPorClasse() {
    const elementos = document.getElementsByClassName("genero-acao");
    console.log("Quantidade:", elementos.length);

    for (let i = 0; i < elementos.length; i++) {
        console.log(i, elementos[i].textContent.trim());
    }

    hl(".genero-acao", "highlight-acao", 2500);
    hl(".genero-drama", "highlight-acao", 2500);
}

//FUNÇÃO 3 — querySelector()
function selecionarPorQuery() {
    const elemento = document.querySelector(".filme-mini");

    console.log(elemento);

    hl(elemento, "elemento-selecionado");
}

//FUNÇÃO 4 — querySelectorAll()
function selecionarTodos() {
    const elementos = document.querySelectorAll(".filme-mini");

    console.log("Quantidade:", elementos.length);

    elementos.forEach((el, indice) => {
        console.log(indice, el.textContent.trim());
    });

    elementos.forEach((el, i) => hl(el, "elemento-selecionado", 2500, i * 300))
}

//FUNÇÃO 1 — textContent
function mudarTexto() {
    const titulo = document.getElementById("titulo-destaque");

    titulo.textContent = "katchau!";
    console.log("Novo texto:", titulo.textContent);

    titulo.classList.add("texto-animado");
    setTimeout(() => titulo.classList.remove("texto-animado"), 1500);
    hl("#titulo-destaque", "elemento-selecionado", 2000)
}

//FUNÇÃO 2 — createElement

function adicionarBadge() {
    const badge = document.createElement("span");

    badge.className = "badge";

    badge.textContent = "⭐️ Em alta";

    const container = document.getElementById("badge-container");

    container.innerHTML = "";

    container.appendChild(badge);

    console.log("Badge criado:", badge);

    hl("#badge-container", "elemento-selecionado", 2000);
}

function mudarPoster() {

    const poster = document.getElementById("poster-destaque");

    const titulo = document.getElementById("titulo-destaque");

    const opcoes = [

        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        },
    ];

    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

    poster.src = sorteado.url;

    poster.alt = sorteado.nome;

    titulo.textContent = sorteado.nome;

    console.log("Poster trocado para: ", sorteado.nome);

    poster.style.opacity = "0";

    poster.style.transition = "opacity 0.3s";

    setTimeout(() => {

        poster.style.opacity = "1";

        poster.classList.add("poster-fade-in");

        setTimeout(() => {
            poster.classList.remove("poster-fade-in")
        }, 600)

    }, 300)
}

function adicionarDestaque() {

    const card = document.getElementById("filme-destaque");

    card.classList.add("destaque");

    console.log("Classes atuais:", card.className);

    setTimeout(() => {
        card.classList.remove("destaque");
    }, 3000)
}

function lerInput() {

    const input = document.getElementById("input-busca");

    console.log(input);

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite algo no campo primeiro!");
        return;
    }

    const titulo = document.getElementById("titulo-destaque");

    titulo.textContent = texto;

    console.log("Valor lido:", texto);

    titulo.classList.add("texto-animado");

    setTimeout(() => {
        titulo.classList.remove("texto-animado")
    }, 1500)
}

function resetarDemo2() {

    document.getElementById("titulo-destaque").textContent = "The Witcher";

    document.getElementById("poster-destaque").src = "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"

    document.getElementById("poster-destaque").alt = "The Witcher";

    document.getElementById("poster-destaque").style.opacity = "1";

    document.getElementById("badge-container").innerHTML = "";

    document.getElementById("input-busca").value = "";

    document.getElementById("filme-destaque").classList.remove("destaque");
}

function adicionarFilme() {

    const input = document.getElementById("input-filme");

    const nomeFilme = input.value.trim();

    if (nomeFilme === "") {
        alert("Digite o nome do filme!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = "🎬 " + nomeFilme;

    const btnRemover = document.createElement("button");

    btnRemover.textContent = "🗑️ Remover"

    btnRemover.onclick = function () {
        this.parentElement.remove();
    };

    li.appendChild(span);
    li.appendChild(btnRemover)

    const lista = document.getElementById("minha-lista")

    lista.appendChild(li)

    input.value = "";
    input.focus();

    consolole.log("Adicionado:", nomeFilme, "Total", lista.children.length)

    li.classList.add("filme-novo")
}

document.addEventListener("DOMContentLoaded", function () {
    const cardFavorito = document.getElementById("card-favorito")
    const statusFavorito = document.getElementById("status-favorito")

    let favoritado = false

    cardFavorito.addEventListener("click", function () {
        favoritado = !favoritado;

        if (favoritado) {
            statusFavorito.textContent = "<3 favoritado!"

            statusFavorito.style.color = "#e50914"
            statusFavorito.style.BorderColor = "#8b949e"
            statusFavorito.style.boxShadow = "none"
        } else {
            statusFavorito.textContent = "Clique para favoritar"
            statusFavorito.style.color = "#2a2a2a";
            statusFavorito.style.boxShadow = "none"
        }
        console.log("favoritado", favoritado)
    })

    const cardDetalhes = document.getElementById("card-detalhes")
    const statusDetalhes = document.getElementById("status-detalhes")

    cardDetalhes.addEventListener("dblclick", function (event) {

    console.log("Double click funcionando");

    statusDetalhes.textContent = "Carregando...";
    statusDetalhes.style.color = "#ffd700";

    setTimeout(function () {

        statusDetalhes.textContent = "Detalhes carregados!";
        statusDetalhes.style.color = "#39b950";

    }, 1000);

});

    const cardHover = document.getElementById("card-hover")
    const statushover = document.getElementById("status-hover");

    cardHover.addEventListener("mouseover", function() {
        statushover.textContent = "O mouse está aqui"

        statushover.style.color = "#e50914"
        cardHover.style.backgroundColor = "#2a2a2a"

        console.log("Mouse aqui")
    })
    cardHover.addEventListener("mouseout", function() {
        statushover.textContent = "O mouse está Aguardando"
        statushover.style.color = "#f1f1f1"

        console.log("Saiu")
        
    })

            const inputTempoReal = document.getElementById("input-busca-tempo-real");

            const contadorDigital = document.getElementById("contador-digitacao");

            inputTempoReal.addEventListener("input", function() {

                const texto = this.value;

                const quantidade = texto.length;

                contadorDigital.textContent = quantidade > 0 ? `Você digitou: ${quantidade} caracteres(s) - "${texto}"` : "Você digitou 0 caracteres";

                console.log("Digitando", texto)

        });

        const inputFilme = document.getElementById("input-filme");

        if (inputFilme) {
            inputFilme.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    adicionarFilme();
                }
            });
        }

        inicializarGaleria();

        const inputFiltro = document.getElementById("input-filtro");
        if (inputFiltro) {
            inputFiltro.addEventListener("input", function() {
                filtraFilmes(this.value);
            }); 
        }

});

const todosFilmes = [
    { nome: 'Stranger Things',      tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg' },
    { nome: 'Breaking Bad',         tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' },
    { nome: 'The Witcher',          tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg' },
    { nome: 'La Casa de Papel',     tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg' },
    { nome: 'Round 6',              tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg' },
    { nome: 'Peaky Blinders',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/i0uajcHH9yogXMfDHpOXexIukG9.jpg' },
    { nome: 'Wednesday',            tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg' },
    { nome: 'The Last of Us',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
    { nome: 'Oppenheimer',          tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { nome: 'Barbie',               tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { nome: 'Duna',                 tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { nome: 'Coringa',              tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { nome: 'A Origem',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { nome: 'Interestelar',         tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { nome: 'Parasita',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { nome: 'Vingadores: Ultimato', tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
];

function inicializarGaleria() {
    const galeria = document.getElementById("galeria-filmes");

    if(!galeria) return;

    todosFilmes.forEach(function(filme) {
        const card = document.createElement("div");
        card.className = "card-galeria"

    })
}

