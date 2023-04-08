const colors = ['Green', 'Red', 'RGBA(133, 122, 200)', '#f15025'];
const button = document.getElementById('button');
const color = document.querySelector('.color');

button.addEventListener('click', function () {

    // Get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber];
})

function getRandomNumber() {

    // By default we will get random numbers between 0 and 1
    // We are multiplying it by colors.length so that we can access the different values of the colors array i.e 0 to 3
    // Math.floor to round the numbers as they are in decimal
    return Math.floor(Math.random() * colors.length);
}