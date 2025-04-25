document.querySelectorAll('.form-message').forEach(element => {
    element.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Formulário enviado!');
        const input = element.querySelector('.input-message');
        const mensagem = encodeURIComponent(input.value);
        const numero = '5583991711674';
        const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

        window.open(url, '_blank');
    });

})