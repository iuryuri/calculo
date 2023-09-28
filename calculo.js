//console.log("esta funcionando!");

 //let anoDeNascimento = window.prompt("Em que ano voce nasceu?");
 //console.log (anoDeNascimento);
// let dataAtual = window.prompt("Em que ano estamos");

// resultado = dataAtual - anoDeNascimento  ;
 //console.log ( resultado);
//alert("Quem nasceu em " + anoDeNascimento + " vai fazer " + resultado  + " anos" );

let nota1 = parseFloat(window.prompt("Nota Do Primeiro Trim"));
console.log (nota1);
let nota2 = parseFloat(window.prompt("Segundo Trim"));
console.log(nota2);
let nota3 = parseFloat(window.prompt("Terceiro Trim"));
console.log(nota3);

let resultado = nota1 +nota2 + nota3;
console.log(resultado)



if(resultado >= 180 ){

alert(" Resultado final "+ resultado + " passou ")


}
else{

alert(" Nota Necessaria 180, " + resultado + " Reprovou mais sorte na proxima ")

}