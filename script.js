function linkWatssapp(event) {


    const nome = document.querySelector('.campo-form').value.trim();
    const mensagem = document.getElementById('textarea-mensagem').value.trim();

    if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e sua mensagem antes de enviar.');
        return;
    }

    const numero = '5561991261241';
    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
}




  