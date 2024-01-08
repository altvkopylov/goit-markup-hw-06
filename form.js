const reviewsForm = document.querySelector('.modal-form');

reviewsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.name);
})

const backdrop = document.querySelector('.backdrop');

document.querySelector('.modal-button').addEventListener('click', (e) => {
    backdrop.classList.remove('is-open');
    console.log('!')
})

document.querySelector('.btn').addEventListener('click', (e) => {
    backdrop.classList.add('is-open');
    console.log(e)
})