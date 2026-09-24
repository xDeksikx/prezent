const openButton = document.getElementById('open-button');
const envelopeImg = document.getElementById('envelope-img');
const letterSheet = document.getElementById('letter-sheet');

// 1. Inicjalizacja pliku audio i włączenie zapętlenia
const openSound = new Audio('meow.mp3');
openSound.loop = true;

openButton.addEventListener('click', () => {
  // 1. Zniknięcie przycisku
  openButton.classList.add('is-hidden');

  // 2. Zamiana koperty na otwartą
  envelopeImg.src = 'envelope-open512.png';

  // 3. Wysunięcie listu po 1 sekundzie (1000 ms)
  setTimeout(() => {
    letterSheet.classList.add('is-visible');
  }, 1000);

  // 4. Start zapętlonego dźwięku po 2 sekundach (2000 ms)
  setTimeout(() => {
    openSound.currentTime = 0;
    openSound.play();
  }, 2000);
});