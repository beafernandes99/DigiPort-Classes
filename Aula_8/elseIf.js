let nota = 10

if (nota>=7) {
    console.log("aluno aprovado") ;
} else if (nota >=5) {
    console.log("aluno em recuperação")
} else {
    console.log("aluno reprovado") ;
}

// faça um script que leia 3 numeros inteiros, em seguida mostre o maior e o menor deles

let num1 = 8;
let num2 = 15;
let num3 = 3;

let maior;
let menor;

// Descobrir o maior
if (num1 >= num2 && num1 >= num3) {
  maior = num1;
} else {
  if (num2 >= num3) {
    maior = num2;
  } else {
    maior = num3;
  }
}

// Descobrir o menor
if (num1 <= num2 && num1 <= num3) {
  menor = num1;
} else {
  if (num2 <= num3) {
    menor = num2;
  } else {
    menor = num3;
  }
}

// Mostrar no console
console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);
