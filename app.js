document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const image = document.getElementById('sarahImage');

    button.addEventListener('click', () => {
        const message = document.createElement('div');
        message.textContent = 'perfeição';
        message.style.position = 'absolute';
        message.style.top = '10px'; // Ajuste a posição para não sobrepor a imagem
        message.style.left = '10px'; // Ajuste a posição para não sobrepor a imagem
        message.style.color = 'white';
        message.style.fontSize = '24px';
        message.style.fontWeight = 'bold';
        image.parentElement.appendChild(message);
    });
});
