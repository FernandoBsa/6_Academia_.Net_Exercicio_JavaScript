function verificarCheckboxes() 
{
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var button = document.getElementById('botao');
    if (checkboxes.length >= 2) 
    {
        button.disabled = false;
    } 
    else 
    {
        button.disabled = true;
    }
}