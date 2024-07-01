const panels = document.querySelectorAll(".painel");

panels.forEach((painel) => {
    painel.addEventListener("click", () => {
        removeActiveClasses();
        painel.classList.add("atividade");
    });
});

const removeActiveClasses = () => {
    panels.forEach((painel) => {
        painel.classList.remove("atividade");
    });
};
