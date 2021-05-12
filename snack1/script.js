// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


const bici = [
    {
        nome:"Bic1",
        peso:19,
    },
    {
        nome:"Bic2",
        peso:19,
    },
    {
        nome:"Bic3",
        peso:14,
    },
    {
        nome:"Bic4",
        peso:12,
    },
    {
        nome:"Bic5",
        peso:13,
    },
    {
        nome:"Bic6",
        peso:18,
    },
    {
        nome:"Bic7",
        peso:17,
    },
    {
        nome:"Bic8",
        peso:16,
    },
    {
        nome:"Bic9",
        peso:11,
    },
    {
        nome:"Bic10",
        peso:12,
    }
]

var minPeso;
var pesi= [];

for(i=0;i<bici.length;i++){
    var {peso} = bici[i]; 
    pesi.push(peso);   
}
minPeso =minimo(pesi);
function minimo(pesi) {
  return Math.min.apply(Math, pesi);
}
var messaggio = `Il minor peso è: ${minPeso} `;
var messaggio2;
for(i=0; i< pesi.length;i++){
    if(pesi[i] == minPeso){
        messaggio2 = `La bici con minor peso è: ${bici[i].nome} `;
     }
}
console.log(messaggio);
console.log(messaggio2);
paragrafo.innerHTML = messaggio +"</br>"+ messaggio2;