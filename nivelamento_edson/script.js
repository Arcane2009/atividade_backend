//1. 
console.log("Olá Mundo");

//2. Crie uma variável com seu nome e exiba o valor no console.
let nome = "Gustavo";
console.log(nome);

//3. Some dois números e exiba o resultado
let x = 10;
let y = 3;
console.log(x + y);

//4. Subtraia doi numeros e exiba o valor.
let subtraia = x - y;
console.log(subtraia);

//5. escubra o resto da divisão de um numero por outro.
let resto = x%y;
console.log(resto);

//6. Crie uma variável booleana(true false) e exiba o valor.
let verdade = true;
console.log(verdade);

//7. Verifique se um número é maior que outro e exiba o resultado.
if(x > y){
    console.log(x + ' é maior');
};

//8. Crie duas variaveis e exiba a concatenação
banana = "Aa";
maca = "Bb";
console.log(banana + maca);

//9. Descubra o tipo de uma variável
console.log(typeof(banana));

//10. Converta o número para string
let num1 = 30;
let num2 = String(num1);
console.log(typeof(num2));

//11. Number para string
let text1 = "19";
let text2 = Number(text1);
console.log(typeof(text2));

//12. Exiba no console.log números de 0 a 10
for(i = 0; i <= 10; i ++){
    console.log(i);
}

//13. Exiba apenas números pares até 20
for(i = 0; i <= 20; i += 2){
    console.log(i);
}

//14. Mostre no console números de 10 a 1
for(i = 10; i >= 1; i -= 1){
    console.log(i);
}

//15. Some números de 1 a 5
let somaLoop = 0;
for(i = 0; i <= 5; i ++){
    somaLoop += i;
}
console.log(somaLoop);

//16. Faça a tabuada do 3
for(i = 0; i <= 10; i ++){
    console.log(i * 3);
}