// let position = 0;
// const circles = document.querySelectorAll('.progress .circle');
// const nextBtn = document.querySelector('.next');
// const timerElement = document.querySelector('.timer');

// let timer;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// nextBtn.addEventListener('click', () => {
//     if (position < circles.length - 1) {
//         position++;
//         updateProgress();
//         resetTimer();
//         startTimer();
//     }
// });

// function updateProgress() {
//     circles.forEach((circle, index) => {
//         if (index === position) {
//             circle.classList.add('active');
//         } else {
//             circle.classList.remove('active');
//         }
//     });
// }

// function resetTimer() {
//     clearInterval(timer);
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     timerElement.textContent = '00:00:00';
// }

// function startTimer() {
//     timer = setInterval(() => {
//         seconds++;
//         if (seconds === 60) {
//             seconds = 0;
//             minutes++;
//         }
//         if (minutes === 60) {
//             minutes = 0;
//             hours++;
//         }
//         timerElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
//     }, 1000);
// }

// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }

// updateProgress();
