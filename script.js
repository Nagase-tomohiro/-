const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

btn.addEventListener('click', () => {
    msg.textContent = 'こんにちは！ボタンが押したね？';
    msg.style.color = 'green';
});