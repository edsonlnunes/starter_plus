let numero1 = 5
let numero2 = 10
let operacao = 3

let resultado;

// if(operacao == 'somar'){
//     resultado = numero1 + numero2
// } else if(operacao == 'subtracao'){
//     resultado = numero1 - numero2
// } else if(operacao == 'multiplicacao'){
//     resultado = numero1 * numero2
// } else if(operacao == 'divisao'){
//     resultado = numero1 / numero2
// } else {
//     resultado = -9999
// }

switch(operacao){
    case 1: {
        resultado = numero1 + numero2
        break;
    }
    case 2: {
        resultado = numero1 - numero2
        break;
    }
    case 3: {
        resultado = numero1 * numero2
        break
    }
    case 4: {
        resultado = numero1 / numero2
        break
    }
    default: {
        resultado = -9999
    }
}

document.write(`Resultado da operacao é: ${resultado}`)