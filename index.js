const intervalID = setInterval(showballs, 2000);

function showballs() {
    const ballContainer = document.querySelector('.ball-container');
    const ball = document.querySelector('.img-wrapper');
    const ballCopy = ball.cloneNode(true);
    ballContainer.appendChild(ballCopy)
}

const stopButton = document.querySelector('.stop-button');

stopButton.addEventListener('click', stopShowBalls);

function stopShowBalls() {
    clearInterval(intervalID);
    const resultOfConfirm = confirm('Do you want to calculate the amount of balls?');
    if (resultOfConfirm === true) {
        const amountOfBalls = document.querySelectorAll('.img-wrapper');
        alert(amountOfBalls.length);
    }
}