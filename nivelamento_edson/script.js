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
let banana = "Aa";
let maca = "Bb";
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

//17. Conte quantos números são maiores que cinco
let lista = [2, 6, 8, 1, 3];
let cont = 0;
for(i = 0; i < lista.length; i++){
    if(lista[i] > 5){
        cont += 1
        console.log(cont)
    }
}

//18. Percorra a string letra por letra
let palavra = "JFRS"
for(i = 0; i < palavra.length; i++){
    console.log(palavra[i])
}

//19. Pare um loop quando encontrar o número 7 de 0 a 10
for(i = 0; i <= 10; i ++){
    if(i = 7){
        console.log(i)
        i = 11
    }
}

//20. Crie uma função que exibe uma mensagem.
function mensagem(){
    console.log("Oiiii")
}

mensagem()

//21. Crie uma função que multiplica dois números
function multiplica(){
    console.log(10*3)
}

multiplica()

//22. Crie uma função que verifica se é par ou impar
function verpar(num){
    return num % 2 === 0 ? "par" : "impar";
}

console.log(verpar(10))

//23. Crie uma função que retorne o dobro
function dobro(dobro){
    return dobro * 2
}
console.log(dobro(2))

//24. Crie uam função que some elementos de um array
function somaArray(arr){
    total = 0;
    for(let i = 0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(somaArray([2,5,6]))

//ATIVIDADES IF//
//11. Verifique se o número 15 é positivo e exiba uma mensagem
let numero = 15;
if(numero > 0){
    console.log(`${numero} é positivo`)
}

//12. Verifique se uma pessoa com 17 é maior de idade e exiba uma mensagem
let idadeif1 = 15;
if(idadeif1 > 17){
    console.log('Você é maior de idade')
} else{
    console.log('Você é menor de idade')
}

// 13: Verifique se o número 7 é par ou ímpar
let numif = 7
if(numif > 0){
    console.log("é par")
}

// 14: Verifique se a nota 7.5 é suficiente para aprovação (média 6)
let notaif = 7.5;
if(notaif >=6){
console.log("Aprovado")} else {console.log("Reprovado")}

// 15: Verifique se o número 8 é maior que 10
let numif2 =8;
if(numif2 >=10){
console.log(`${num} é maior do 10`)}else{
    console.log("menor");
};

// 16: Verifique se o número 0 é igual a zero
let numif3 =0
if(numif3 === 0){
    console.log("Igual a zero")
}

// 17: Compare os números 10 e 20 e diga qual é o maior
let numif4 = 10
let numif5 = 20
if(numif4 > numif5){
    console.log("numif4 é maior que numif5")
} else {
    console.log("numif5 é maior que numif4")
}

// 18: Verifique se uma pessoa de 16 anos pode votar (16+ pode votar)
let idadeif2 = 16;
if(idadeif2 >= 16){
    console.log('Você pode votar')
} else{
    console.log('Você não pode votar')
}

// 19: Verifique se o número 25 está entre 10 e 30
let numif6 = 25
if(numif6 > 10 & numif6 < 30){
    console.log("O número 25 está entre 10 e 30")
}

///ATIVIDADES ARRAY//
//31. Crie um array com os números 10,20,30,40 e exiba todos
let lista1 = [10,20,30,40]
console.log(lista1)
//32. Crie um array com 5 frutas e exiba a primeira fruta
let lista2 = ['amora','banana','carambola','maça']
console.log(lista2[0])
//33. Adicione o número 50 no final do array [10,20,30,40]
let lista3 = [10,20,30,40]
lista3.push(50)
console.log(lista3)
//34. Remova o último elemento do array [1,2,3,4,5]
let lista4 = [1,2,3,4,5]
lista4.pop()
console.log(lista4)
//35. Exiba quantos elementos tem o array [5,10,15,20]
let lista5 = [5,10,15,20]
quantos = 0
for(let i = 0; i<lista5.length; i++){
    quantos += 1
}
console.log(`lista5 tem ${quantos} elementos`)
//36. Some todos os números do array [2,4,6,8]
let lista6 = [2,4,6,8]
function somaArray(lista6){
    total = 0;
    for(let i = 0; i<lista6.length; i++){
        total += lista[i];
    }
    return total;
}
console.log(somaArray(lista6))
// 37: Multiplique cada elemento do array [1, 2, 3, 4] por 2
console.log("\n ====Multiplicar por 2====")
let lista7 = [1,2,3,4]
let multLista7 = []
for(let i = 0; i < lista7.length; i++){
    multLista7.push(lista7[i] * 2)
}
console.log(multLista7)
// 38: Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]
let lista8 = ["maçã", "banana", "uva"]
for(let i = 0; i < lista8.length; i++){
    if(lista8[i] == "laranja"){
        console.log("achou\n")
    } else{
        console.log("não achou\n")
    }
}
// 39: Exiba um por um os elementos do array ["azul", "verde", "amarelo"]
let lista9 = ["azul", "verde", "amarelo"]
for (let j )
// 40: Exiba o último elemento do array [100, 200, 300, 400, 500]

// ==================== ATIVIDADES COM MATRIZ ====================

// 41: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda

// 42: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]

// 43: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]

// 44: Some todos os números da matriz [[2, 4], [6, 8]]

// 45: Crie uma matriz 3x3 com números de 1 a 9

// 46: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]

// 47: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10

// 48: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]

// 49: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]

// 50: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2

// ==================== ATIVIDADES COM OBJETOS ====================

// 51: Crie um objeto pessoa com nome "Ana" e idade 25
let Ana = {
    nome: "Ana",
    idade: 25
}
// 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
let carlos = {
    nome: "Carlos",
    cidade: "São Paulo"
}
console.log(carlos)
// 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
let maria = {
    nome: "Maria", 
    idade: 20
}
maria.curso = "História"
console.log(maria)
// 54: Altere a idade do objeto {nome: "João", idade: 18} para 19
let joao = {nome: "João", idade: 18}
joao.idade = 19
console.log(joao)
// 55: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}
let pedro = {nome: "Pedro", telefone: "99999-9999"}
delete pedro.telefone
console.log(pedro)
// 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}
let tenis = {marca: "Nike", tamanho: 42, cor: "preto"}
console.log(tenis)
// 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"
let rex = {latir: ""}
rex.latir = "Au au!"
console.log(rex)
// 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]
let alunoLucas = {nome: "Lucas", notas: [8, 7, 9]}
console.log(alunoLucas)
// 59: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"
let carroFiat = {marca: "Fiat"}
let motorFiat = {potencia: 1.0}
console.log(carroFiat, motorFiat)
// 60: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos
let produto1 = {nome: "Laranja", preco: 3.55}
let produto2 = {nome: "Salgadinho", preco: 13.60}
let produto3 = {nome: "Refri", preco: 8.90}
let produtosObj = [produto1, produto2, produto3]
console.log(produtosObj)
//Ternário//
//1. Verifique se um número é positivo ou não
let numter = 5;
let resultado = numter > 0 ? "Positivo" : "Negativo";
console.log(`\n O número é ${resultado}`)

//2.Verifique se uma pessoa pode votar. Se sim, retorne "Pode votar". Se não, "Não pode votar"
let idadevoto = 17;
let votoper = idadevoto >= 16 ? "pode votar" : "não pode votar";
console.log(`\n Você ${votoper}`)

//3. Descubra se um número é par ou ímpar. Se par, retorne "par", se ímpar retorne "ímpar"
let parter = 17;
let resulpar = parter%2 === 0 ? "par" : "ímpar";
console.log(`\n O número é ${resulpar}`)

//4. Crie uma variação de nível de acesso. Se for "admin" retorne acesso total caso contrário "acesso restrito"
let acesso = "Admin";
let nivelacess = acesso === "Admin" ? "total" : "restrito";
console.log(`\n O seu nível de acesso é ${nivelacess}`)

//5. Aplique desconto em um produto. Se preço > 100, aplique 10% de desconto (multiplicar por 0.9). Caso contrário, mantenha o preço original
let preco = 20
let precodesconto = preco >100 ?  preco*0.9 : preco;
console.log(`\n O seu produto vai custar ${precodesconto}`)

/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
let nota = 20
let media = nota >= 7 ?  "aprovado" : "reprovado";
console.log(`\n O aluno está ${media}`)

/*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/

let par10 = 20
let maiorpar10 = par10%2 === 0 & par10 > 10 ?  "atende aos critérios" : "não atende aos critérios";
console.log(`\n O número ${maiorpar10}`)

/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/

let posinum = 20
let resulposinum = posinum > 0 ? "positivo" : posinum < 0 ? "negativo" : "zero";
console.log(`\n A classificação do número é ${resulposinum}`)

/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/

let acesso2 = "admin"
let senhaacess2 = "123"
let login = acesso2 === "admin" & senhaacess2 === "123" ?  "Login OK" : "Falha no login";
console.log(`\n ${login}`)

/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/

let idade2 = 20
let idadeclass = idade2 < 12 ? "criança" : idade2 >= 12 & idade2 <= 17 ? "adolescente" : idade2 >= 18 & idade2 <= 59 ? "adulto" : "idoso";
console.log(`\n A classificação da idade é ${idadeclass}`)