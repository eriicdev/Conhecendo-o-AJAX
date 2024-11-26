// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endPoint = `http://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endPoint);
//         xhttp.send();
//     })
// })

$(document).ready(function(){
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json/resultado`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        // $.ajax(endPoint).done(function(resposta){
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        //     $('#Endereco').val(endereco);

        //     setTimeout(function() {
        //         $(botao).find('i').removeClass('d-none');
        //         $(botao).find('span').addClass('d-none');
        //     } ,1000)
        // })

        fetch(endPoint).then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#Endereco').val(endereco);
        })
        setTimeout(function() {
            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
            } ,1000)
    })
});