function localizarString(){
    var string = document.getElementById('string').value;
    var substring = document.getElementById('substring').value;

    var posicao = string.indexOf(substring);
    var resultado;

    if(posicao === -1) {
        resultado = 'Este elemento não se encontra na frase!';
    }
    else{
        resultado = 'A posição do elemento é:' + posicao;
    }
    document.getElementById('resultado').innerHTML = resultado;
}