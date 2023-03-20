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
    document.getElementById('finalMessage').innerHTML = '';
    //creiamo un generatore di bombe tramite una funzione che scelga sempre di avere un numero fisso in gioco;
    const numBombs = 16;
    function bombGenerator(numbomb, indexsquares) {
        let bombs = [];
        while (bombs.length < numbomb) {
            let bomb = Math.floor((Math.random() * indexsquares));

            if (!bombs.includes(bomb)) {
                bombs.push(bomb);
            }

        }
        return bombs;
    }
    let bombs = bombGenerator(numBombs, numSquares);
    console.log(bombs);

    for (let i = 1; i <= numSquares; i++) {
        document.getElementById('grid').innerHTML += `
        <div class="square ${level} d-flex align-items-center justify-content-center text-light fw-semibold"></div>
        `
    }
    squares = document.querySelectorAll('.square')
    let score = 0
     let gameOver= false

    //  console.log(squares);
    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener('click', function () {
            //    console.log('sono il tasto numero i:' + i)
            if (!gameOver) {

                if (bombs.includes(parseInt(i))) {
                    // console.log('sono una bomba');
                    squares[i].classList.add('redCheck')
                    document.getElementById('finalMessage').innerHTML = `Hai perso!! il tuo punteggio è: ${score}!`
                    gameOver= true
                } else {
                    squares[i].classList.add('blueCheck');
                    // console.log('sono una casella pulita');
                    score++;
                }


            }

        })
    }







}








