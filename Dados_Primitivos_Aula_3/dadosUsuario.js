
nome = 'Luiz Otavio Miranda';
sobrenome = 'Miranda';
idade = 30;
peso = 84;
altura = 1.8;
anoAtual = 2010;
 
const imc = peso / (altura * altura);
const anoNacimento = anoAtual - idade;
 
console.log(nome, "tem", idade, "anos, pesa", peso,"Kg" );
console.log("Tem", altura, "de altura e seu IMC é de", imc);
console.log(nome.toLowerCase(), "nasceu em", anoNacimento);