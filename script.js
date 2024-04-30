const triggerModal = document.querySelector("#trigger-modal");
const modal = document.querySelector("#modal");

triggerModal.addEventListener("click", () => {
	modal.classList.toggle("invisible");
});
