
const calcular = document.getElementById('calcular');



function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const resultadoIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (resultadoIMC < 18.5){
            classificacao = "Abaixo do peso.";
        } else if (resultadoIMC < 25 ) {
            classificacao = "Está com o peso ideal!";
        } else if (resultadoIMC < 30) {
            classificacao = "Levemente acima do peso";
        } else if (resultadoIMC < 35){
            classificacao ="Com obesidade grau I";
        }else if (resultadoIMC < 35){
            classificacao ="Com obesidade grau II";
        }else {
            classificacao ="Com obesidade grau III. Cuidado";
        }


        resultado.textContent = `${nome} seu IMC é ${resultadoIMC} e você está ${classificacao}`

    } else {
         resultado.textContent = 'Preencha os campos acima!'
        }
        
    }


calcular.addEventListener('click', imc);