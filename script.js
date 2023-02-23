const calcular = document.getElementById('calcular');

function calc () {
    const valor = document.getElementById('valor').value.replace(",", ".");
    const km = document.getElementById('km').value.replace(",", ".");
    const resultado = document.getElementById('resultado');

    if (valor !== '' && km !== ''){
        const valorCalculado = (valor/km).toFixed(2).replace(".", ",");
        resultado.textContent = 'O valor de cada Km rodado é de: R$' + valorCalculado;
    } else {
        resultado.textContent ='Preencha todos os campos!';
    }
}

calcular.addEventListener('click', calc);