// const panels = document.querySelectorAll(".painel");

//panels.forEach((painel) => {
  //  painel.addEventListener("click", () => {
      //  removeActiveClasses();
       // painel.classList.add("atividade");
    //});
//});

//const removeActiveClasses = () => {
   // panels.forEach((painel) => {
    //    painel.classList.remove("atividade");
    //});
//};

const panels = document.querySelectorAll(".painel");
const xinZhaoLink = document.querySelector(".painel:nth-child(2) a");
const xinZhaoIcon = document.querySelector(".painel:nth-child(2) i");

panels.forEach((painel) => {
    painel.addEventListener("click", () => {
        removeActiveClasses();
        painel.classList.add("atividade");

        // Verifica se o painel clicado é o do Xin-Zhao
        if (painel.classList.contains("atividade") && painel.querySelector("h3").textContent === "Xin-Zhao") {
            xinZhaoLink.style.display = "inline"; // Mostra o link
            xinZhaoIcon.style.display = "inline"; // Mostra o ícone
        } else {
            xinZhaoLink.style.display = "none"; // Esconde o link caso não seja o Xin-Zhao
            xinZhaoIcon.style.display = "none"; // Esconde o ícone caso não seja o Xin-Zhao
        }
    });
});

const removeActiveClasses = () => {
    panels.forEach((painel) => {
        painel.classList.remove("atividade");
    });
};

