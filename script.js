// Realizzare un oggetto che rappresenti un garage: 

// Dovrà contenere una lista di automobili.
// Ciascuna automobile dovrà avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso bello come Charizard).
// Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

// garage 
// lista automobili
// input marca e output modelli


// let marca = prompt('inserisci marca')

// let garage = {
//     'bmw' : function() {console.log('serie1, serie3')}, 
//     'mercedes' : function(){console.log('modelli sono gle, classea')},
//     'audi' : function(){console.log('i modelli sono TT, A1 e scassone'); }
// };
//  console.log(garage);
//   console.log(garage.bmw);    
 // console.log(garage.mercedes);

// if (marca==='audi') {garage.audi()}
//     else if (marca==='mercedes') {garage.mercedes()}
//     else if (marca==='bmw') {garage.bmw()}


// esercizio finito 




// esercizio3
// ESERCIZIO 3:ESERCIZIO 3:

// Per esercitarvi con gli oggetti... Seguendo la lezione di stamattina, passo passo con il docente replicare il bowling. 

// aggiungere il metodo per rimuovere un giocatore

let bowling =
{
    'players' : [
        {'name' : 'Mattia', 'score' : []},
        {'name' : 'Federico', 'score' : []},
        {'name' : 'Alberto', 'score' : []},
    ],
    'setScores' : function () {
        this.players.forEach
        ((player)=>{
            for(let i=1;i<=10;i++) {
                player.score.push(Math.floor(Math.random() * (10-1+1)+1))
            };
        });
    },
    
    
    'setFinalScore' : function (){
        this.players.forEach((player)=>{
            player.finalScore= player.score.reduce((acc,punteggio)=> acc+punteggio)
        }) 
        bowling.setScores();
        bowling.setFinalScore();
        console.log(bowling.players);
    }
}