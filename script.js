
const panels = document.querySelectorAll(".painel");
const xinZhaoLink = document.querySelector(".painel:nth-child(2) a");
const xinZhaoIcon = document.querySelector(".painel:nth-child(2) i");

panels.forEach((painel) => {
    painel.addEventListener("click", () => {
        removeActiveClasses();
        painel.classList.add("atividade");

        
        if (painel.classList.contains("atividade") && painel.querySelector("h3").textContent === "Xin-Zhao") {
            xinZhaoLink.style.display = "inline";
            xinZhaoIcon.style.display = "inline";
        } else {
            xinZhaoLink.style.display = "none"; 
            xinZhaoIcon.style.display = "none"; 
        }
    });
});

const removeActiveClasses = () => {
    panels.forEach((painel) => {
        painel.classList.remove("atividade");
    });
};

