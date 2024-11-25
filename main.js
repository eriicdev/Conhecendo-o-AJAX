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
    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;

        $.ajax(endPoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#Endereco').val(endereco);
        })
    })
})