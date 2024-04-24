const calcular=document.getElementsByid("calcular");

function imc() {
    const nome=document.getElementsByid("nome")value;
    const altura=document.getElementsByid("altura")value;
    const peso=document.getElementsByid("peso")value;
    const resultado=document.getElementsByid("resultadp")value;


    if (nome!=="&&altura !=="&& peso !==) {

        const valorIMC =(peso/(altura*altura)).toFixed(1);


        let cassificacao="";

        if (valorIMC<18.5){
            classificacao='abaixo do peso';
        }else if (valorIMC<25){
            classificacao='com peso ideal parabéns!!!';
        }else if (valorIMCa<30) {
            cassificacao='levemente acima do peso';
        }else if (valorIMC<35) {
            classificacao='com obesidade grau 1.';
        }else if (valorIMC<40) {
            classificacao='com obesidade grau 2.';
        }else {
            classificacao='com obesidade grau 3. Cuidado;'
        }    

        resultado.textContent=`${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

        
    