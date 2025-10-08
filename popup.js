// HTMLの要素を取得
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const timerDisplay = document.getElementById('timerDisplay');

// スタートボタンがクリックされたときの処理
startButton.addEventListener('click', () => {
  console.log('スタートボタンがクリックされました！');
});

// ストップボタンがクリックされたときの処理
stopButton.addEventListener('click', () => {
  console.log('ストップボタンがクリックされました！');
});
