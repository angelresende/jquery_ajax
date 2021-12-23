function consultar(){
    let cep = document.getElementById("cep").value;
    let url =  `https://viacep.com.br/ws/${cep}/json/`;
    console.log(cep);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            //console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#estado").html(response.uf);
            $('#cep_informado').html('O cep ' + response.cep + ' retornou o endereço abaixo:');
            $('#card_cep').show();            
        }
    })
}

function limpar(){
    $("#logradouro").html('');
    $("#bairro").html('');
    $("#cidade").html('');
    $("#estado").html('');
    $('#card_cep').hide();
}