const numberInput = document.querySelector('#numberInput');
const startButton = document.querySelector('#startButton');
const result = document.querySelector('#result');

startButton.addEventListener('click', () => {
    const userNumber = parseInt(numberInput.value);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        result.textContent = 'Пожалуйста, введите число от 1 до 10';
        return;
    }

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (userNumber === randomNumber) {
        result.textContent = 'Ты победил';
    } else {
        result.textContent = 'Давай еще раз';
    }
});