// console.log('Campo minato')

// # Griglia campo minato

// - l'utente clicca su un bottone che genererà una griglia di gioco quadrata
//   - creo una variabile che richiami dal DOM il bottone 'btn-game'
const gameBtnElement = document.querySelector('.btn-game');
console.log(gameBtnElement);
//   - creo una variabile che richiami dal DOM l'elemento 'grid'
const gridElement = document.querySelector('.grid');
console.log(gridElement);
// - ogni cella ha un numero progressivo, da 1 a 100.
// - quando l'utente clicca su ogni cella, la cella cliccata si colora di azzzurro e stampa un messaggio in console (con il numero della cella cliccata)
//     - assegno all elemento btn-game e aggiungo l' eventlistner
gameBtnElement.addEventListener('click', function () {
    console.log('gioca');
//     - svuoto la griglia delle celle generate in precedenza
//     - genero 100 caselle,  con un numero progressivo da 1 a 100
    for (let i = 0; i < 100; i++) {
        const n = i + 1;
        console.log(n)
    };
//     - recupero tutte le caselle create
//     - aggiungo ad ogni casella l'eventlistner, che al click cambiera il background in verde
    
}); 


