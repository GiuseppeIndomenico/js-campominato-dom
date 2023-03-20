// <div class="square d-flex align-items-center justify-content-center text-light fw-semibold">1</div>
// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//raccolte le varie costanti da bottoni e input
const difficult = document.querySelector('select');
const btnPlay = document.querySelector('button');
//aggiungiamo l'evento che fa partire il gioco
btnPlay.addEventListener('click', play);


function play(e) {
    e.preventDefault();
    //in base alla difficoltà vengono scelti il numero di quadrati di cui deve essere la griglia di gioco;
    const level = difficult.value
    //console.log(diffChoice);
    let numSquares;
    switch (level) {
        case 'easy':
            numSquares = 100;
            break;

        case 'normal':
            numSquares = 81;
            break;

        case 'hard':
            numSquares = 49;
            break;
    };
    //   console.log(numSquares);
    document.getElementById('grid').innerHTML = ``;

    for (let i = 1; i <= numSquares; i++) {
        document.getElementById('grid').innerHTML += `
        <div class="square ${level} d-flex align-items-center justify-content-center text-light fw-semibold">${i}</div>
        `
    }

    squares = document.querySelectorAll('.square')
  //  console.log(squares);
    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener('click', function () {
          //   console.log('sono il tasto numero i:' + i)
            squares[i].classList.add('blueCheck');
       
        })
    }







}








