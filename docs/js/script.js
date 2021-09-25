/* eslint-disable no-alert */
/* eslint-disable id-length */
const modalButton = document.querySelectorAll('.catalog-item__button');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
const productName = document.querySelector('.modal-form__input--product-name');
const form = document.querySelector('modal-form');


function openModal(evt) {
  evt.preventDefault();
  modal.classList.add('modal--open');
  const closestTitle = evt.currentTarget.closest('.catalog-item').querySelector('.catalog-item__title');
  productName.value = closestTitle.textContent;
}

modalButton.forEach((button) => {
  button.addEventListener('click', openModal);
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal--open');
  }
});

modalWrapper.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

modal.addEventListener('click', () => {
  modal.classList.remove('modal--open');
});

async function formSend(evt) {
  evt.preventDefault();

  const formData = new FormData(form);
  const response = await fetch('./send.php', {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    const result = await response.json();
    alert(result.message);
    form.reset();
  } else {
    alert('Ошибка');
  }

}

form.addEventListener('submit', formSend);
