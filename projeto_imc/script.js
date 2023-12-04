function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso === '' || altura === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var imc = (peso / (altura * altura)).toFixed(2);
    document.getElementById('valorIMC').innerText = imc;
}