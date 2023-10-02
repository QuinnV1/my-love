

const showModalButton = document.getElementById("showModal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");

showModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Добавим обработчик события для кнопки закрытия
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});