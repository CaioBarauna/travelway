const botaoMenu = document.getElementById("menu-toggle");
const menuLista = document.getElementById("menu-lista");

botaoMenu.addEventListener("click", function () {
    menuLista.classList.toggle("menu-aberto");

    const menuEstaAberto = menuLista.classList.contains("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);

    if (menuEstaAberto) {
        botaoMenu.textContent = "✕";
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    } else {
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});

const linksMenu = menuLista.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menuLista.classList.remove("menu-aberto");

        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});