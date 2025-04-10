function respostaSim() {
    alert('Você aceitou! 💖');
}

function respostaNao() {
    const botaoNao = document.getElementById('nao');
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const maxX = larguraTela - larguraBotao;
    const maxY = alturaTela - alturaBotao;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = `${randomX}px`;
    botaoNao.style.top = `${randomY}px`;
}
