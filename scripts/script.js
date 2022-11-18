const openBtnElem = document.querySelector('#open-btn');
const modal = document.querySelector('#modal');
const closeBtnElem = document.querySelector('#close-btn');
const form = document.querySelector('#modal-form');
const modalinputs = document.querySelectorAll('.modal__input');

// Functions

function openModal() {
  modal.classList.add('backdrop-open');
}

function closeBtn() {
  modal.classList.remove('backdrop-open');
}

function closeBackdrop(e) {
  if (e.target === e.currentTarget) {
    closeBtn();
  }
}

function closeEscape(e) {
  if (e.code === 'Escape') {
    closeBtn();
  }
}

// Event listeners

openBtnElem.addEventListener('click', openModal);
closeBtnElem.addEventListener('click', closeBtn);
modal.addEventListener('click', closeBackdrop);
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
window.addEventListener('keydown', closeEscape);
