const downloadButton = document.querySelector('.download');
const demoForm = document.querySelector('.demo');
const demoOverlay = document.querySelector('.overlay');

downloadButton.addEventListener('mousedown', () => {
    demoForm.classList.add('active');
})

demoOverlay.addEventListener('mousedown', () => {
    demoForm.classList.remove('active');
})