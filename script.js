const reviewsForm = document.querySelector('.modal-form');

reviewsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.name);
})

const backdrop = document.querySelector('.backdrop');

document.querySelector('.modal-button').addEventListener('click', (e) => {
    backdrop.classList.remove('is-open');
    // console.log('!')
})

document.querySelector('.button').addEventListener('click', (e) => {
    backdrop.classList.add('is-open');
    // console.log(e)
})

const mobileMenu = document.querySelector('.mobile-menu');

document.querySelector('.button-menu').addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
})

document.querySelector('.button-close-icon').addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
})