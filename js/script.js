const subscribeButtons = document.querySelectorAll(".subscribe-now-button");
const toast = document.querySelector(".toast");

subscribeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    });
});