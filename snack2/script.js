// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
var squadre = [
    {
        nome:"Napoli",
        punti:0,
        falli:0,
    },
    {
        nome:"Inter",
        punti:0,
        falli:0,
    },
    {
        nome:"Milan",
        punti:0,
        falli:0,
    },
];
var min=0;
var max=50;

function numeriRandom(min,max){
    return number = Math.floor(Math.random() * (max - min) + min);
}

for(i=0;i<squadre.length;i++){
    squadre[i].punti= numeriRandom(min,max);
    squadre[i].falli= numeriRandom(min,max);
}
console.log(squadre);
var squadreFalliSubiti = [];
for(i=0;i<squadre.length;i++){
    var squadraFalliSubiti = {};
    var {nome,falli} = squadre[i];
    squadraFalliSubiti.nome = nome;
    squadraFalliSubiti.falli = falli;
    squadreFalliSubiti.push(squadraFalliSubiti);
    // console.log(nome,falli);
}
console.log(squadreFalliSubiti);



