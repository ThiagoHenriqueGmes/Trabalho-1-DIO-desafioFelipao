/* 
1 Desafio Classificador do Heroi
O desafio se baseia em:
Criar uma variavel para armazenar o nome e a quantidade de XP de um herói, depois utilzie 
uma estrutura de decisao para apresentar algumas mensagens abaixo:
-Se o XP for menor do que 1.000 = Ferro
-Se o XP for entre 1.001 e 2.000 = Bronze
-Se o XP for entre 2.001 e 5.000 = Prata
-Se o XP for entre 6.001 e 7.000 = Ouro
-Se o XP for entre 7.001 e 8.000 = Platina Diamante
-Se o XP for entre 8.001 e 9.000 = Ascedente
-Se o XP for entre 9.001 e 10.000 = Imortal
-Se o XP for maior ou igual a 10.001 = Radiante

O algoritimo terá que apresentar uma saida com a mensagem:
"O Heroi de nome {} está no nível de {}"
*/


let nomeHeroi = "Goku";
let xpHeroi = 12000; 

let nivelHeroi = "";

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina Diamante";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

console.log("O herói" + " " + nomeHeroi + " " + "está no nivel" + " " + nivelHeroi);
