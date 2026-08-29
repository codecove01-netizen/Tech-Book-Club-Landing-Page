const subscribeButtons = document.querySelectorAll(".subscribe-now-button");
const toast = document.querySelector(".toast");

let toastTimer;

subscribeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        clearTimeout(toastTimer);
        toast.classList.add("show");

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    });
});