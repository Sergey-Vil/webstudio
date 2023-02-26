(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const filmsItemEl = document.querySelector('.js-card');
const modalBackdropEl = document.querySelector('.modal__backdrop');
const modalCloseBtnEl = document.querySelector('.modal__close-btn');

filmsItemEl.addEventListener('click', onShowModal);
modalCloseBtnEl.addEventListener('click', onClosedModal);
modalBackdropEl.addEventListener('click', onCloseModal);

function onShowModal(e) {
  console.log(e.target.elements);
  modalBackdropEl.classList.remove('is-hidden');
  console.log(e.target);
}
function onCloseModal(e) {
  if (e.target.className == 'modal__backdrop') {
    modalBackdropEl.classList.add('is-hidden');
    console.log(e.target);
  }
}
function onClosedModal(e) {
  modalBackdropEl.classList.add('is-hidden');
}
