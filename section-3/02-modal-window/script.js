'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.show-modal');

// Open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', openModal);
}
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// keypress event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
