function botao() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://google.com/");
 //   window.location.href = "https://google.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
 //   document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
 //   document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function load() {
    alert("página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/


/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

//var d = new Date();
//alert(d.getMinutes());
*/

/*
var count;

for (count = 0; count <= 5; count++ ){
    alert(count);
}
*/


/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}

*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/

//var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}];
//console.log(frutas[0].nome);

//var fruta = {nome: "maça", cor: "vermelha"}
//console.log(fruta);

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*
var nome = "Felipe Costa";
var idade = 28;
var idade2 = 10;
var frase = "Japão está com problemas";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
*/
