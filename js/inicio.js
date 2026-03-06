const container = document.querySelector(".noticias");

document.getElementById("nextBtn").addEventListener("click", () => {
    container.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

document.getElementById("prevBtn").addEventListener("click", () => {
    container.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});