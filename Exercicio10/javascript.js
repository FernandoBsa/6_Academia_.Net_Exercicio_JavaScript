function habilitarCampos(campoAtivo, campoInativo) 
{
    document.getElementById(campoAtivo).disabled = false;
    document.getElementById(campoInativo).disabled = true;
}

function desabilitarDataNascimento() 
{
    document.getElementById('dataNascimento').disabled = true;
}

function habilitarDataNascimento() 
{
    document.getElementById('dataNascimento').disabled = false;
}

function formularioConcluido() 
{
    alert('Cadastro concluído!');
}