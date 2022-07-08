function calculadora () {

    const operacao =Number (prompt('Escolha uma operacao:\n 1- Soma(+)\n 2- subtracao(-)\n 3- multiplicacao(*)\n 4- divisao(/)\n 5- Divisao inteira(%)\n 6- Potencia(**)\n '));

    console.log(operacao)
}

let n1=Number (prompt ('Insira o primeiro valor:'));
let n2=Number (prompt ('Insira o segundo valor:'));
let resultado;

function soma (){
    resultado=n1+n2;
    alert(`${n1}+${n2}=${resultado}`)
}

function subtracao (){
    resultado=n1-n2;
    alert(`${n1}-${n2}=${resultado}`)
}

function multiplicacao (){
    resultado=n1*n2;
    alert(`${n1}*${n2}=${resultado}`)
}

function divisao (){
    resultado=n1/n2;
    alert(`${n1}/${n2}=${resultado}`)
}

function divisaointeira (){
    resultado=n1%n2;
    alert(`O resto da divisão ${n1} e ${n2} é igual a ${resultado}`)
}

function potencia (){
    resultado=n1**n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
}

function novaOperacao (){

    let opcao = prompt ('Deseja fazer outra operacao?\n 1-Sim\n 2-Não\n')

    if (opcao==1){
        calculadora();
    } else if (opcao==2){
        alert ('Até mais!');
    } else {
        alert ('Digite uma opcao valida')
        novaOperacao();
    }
}


if (operacao==1){
    Soma();
} else if (operacao==2){
    subtracao();
} else if (operacao==3){
    multiplicacao();
}else if (operacao==4){
    divisao();
} else if (operacao==5){
    divisaointeira();
} else if (operacao==6){
    potencia();
}

calculadora();

