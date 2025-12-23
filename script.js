const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

btn.addEventListener('click', () => {
    msg.textContent = 'こんにちは！ボタンが押されました。';
    msg.style.color = 'green';
});