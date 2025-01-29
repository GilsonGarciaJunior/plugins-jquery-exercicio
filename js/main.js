$(document).ready(function () {
    

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor,digite o seu nome completo',
            email: 'Por favor,digite o seu email',
            telefone: 'Por favor,digite o seu número de telefone',
            endereco: 'Por favor,digite o seu endereço',
            cpf: 'Por favor,digite o seu cpf',
            cep: 'Por favor,digite o seu cep',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
})