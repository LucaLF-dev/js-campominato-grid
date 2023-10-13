# Griglia campo minato

- l'utente clicca su un bottone che genererà una griglia di gioco quadrata
  - creo una variabile e richiamo dal DOM il bottone 'btn-game'
  - creo una variabile e richiamo dal DOM l'elemento 'grid'
- ogni cella ha un numero progressivo, da 1 a 100.
- quando l'utente clicca su ogni cella, la cella cliccata si colora di azzzurro e stampa un messaggio in console (con il numero della cella cliccata)
    - assegno all elemento btn-game e aggiungo l' eventlistner
    - svuoto la griglia delle celle generate in precedenza
    - genero 100 caselle,  con un numero progressivo da 1 a 100
    - recupero tutte le caselle create
    - aggiungo ad ogni casella l'eventlistner, che al click cambiera il background in verde
    

## Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 