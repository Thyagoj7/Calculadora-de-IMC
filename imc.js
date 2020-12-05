 //O getElementByID pega o elemento html pelo ID.
 // os nomes/elementos na verdade são objetos.
//O .value siginifca que estamos trabalhando encima do valor do elemento.


const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value; 
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabens!!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I. ';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II. ';
        }else {
            classificacao = 'com obesidade grau III. cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}valorIMC`;  //`` ascento grave para não ter que ficar concatenando.
    }else{
        resultado.textContent ='preencha todos campos!!!';
    }
}
calcular.addEventListener('click', imc); 
// usamos um metodo para o objeto que chama um evento que sera o clik.Quando ele for executado ira chamar a função IMC