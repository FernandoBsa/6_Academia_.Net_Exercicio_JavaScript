function formulario() 
{
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (login === '' || senha === '' || confirmarSenha === '') 
    {
        alert('Por favor, preencha todos os campos.');
        return false;
    } 
    else if (senha !== confirmarSenha) 
    {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return false;
    } 
    else if (senha.length < 6 || senha.length > 10) 
    {
        alert('A senha deve ter entre 6 e 10 caracteres.');
        return false;
    }
    else
    {
        alert('Cadastra concluido.')
    }
}