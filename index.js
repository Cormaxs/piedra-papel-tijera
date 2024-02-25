
const piedra = 0, papel = 1, tijera = 2, ronda = 3, humano = 1, pc = 0;



function getComputerChoice(n){//devuelve piedra, papel o tijera
    let aleatorio = Math.floor(Math.random() * (3 - 0));//floor redondea, lo demas establece un maximo y mnimo
    switch(aleatorio ){//elije las opciones 
        case 0:
            alert("pc eligio piedra");
            break;//sale del switch
        case 1:
            alert("pc eligio papel");
            break;
        case 2:
            alert("pc eligio tijera");
        break;
        default://si por alguna modificacion son mas de 0,1,2 tira error
            alert("opcion invalida, elija nuevamente");
            getComputerChoice();
        break;

    } 
    playRound(n,aleatorio);//paso los valores a la otra funcion
}
var i= 0, j = 0;
function playRound(playerSelection, computerSelection){//dice quien gano la mano
    if(i >= 3 || j >= 3){
        if(i > j){
            alert("felicidades ganaste");
            i = 0, j = 0;
            JUGADOR.innerText = "player :" + i;
            PCC.innerText = "pc : " + j;
        }
        else{
            alert("lo siento, perdiste");
            i = 0, j = 0;
            JUGADOR.innerText = "player :" + i;
            PCC.innerText = "pc : " + j;
        }
    }
        else if(playerSelection === computerSelection){
            alert("empataron la mano");
        }
        else if(playerSelection == 0 && computerSelection == tijera){
            i++;
             JUGADOR.innerText = "player : " + i;
        }
        else if(playerSelection == 1 && computerSelection == piedra){
            i++;
             JUGADOR.innerText = "player : " + i;
        }
        else if(playerSelection == 2 && computerSelection == papel){
            i++;
            JUGADOR.innerText = "player :" + i;
        }
        else{   
            j++; 
           PCC.innerText = "pc : " + j;
        }
    
}



//selecciono el elemento mediante su id
const PIEDRA = document.getElementById('miImagen0');
const PAPEL = document.getElementById('miImagen1');
const TIJERA = document.getElementById('miImagen2');
const JUGADOR = document.getElementById('jugador');
const PCC = document.getElementById('pcc');

//DIGO QUE HACER DEPENDIENDO QUE CLICKEEN
PIEDRA.addEventListener('click', function() {
  // Acción a realizar cuando se hace clic en el botón con la imagen 0
  game(piedra);
});
PAPEL.addEventListener('click', function() {
  // Acción a realizar cuando se hace clic en el botón con la imagen 1
  game(papel);
});
TIJERA.addEventListener('click', function() {
  // Acción a realizar cuando se hace clic en el botón con la imagen 2
  game(tijera);
});
//dicen cuantos puntos tienen cada uno



function game(eligio){//secuencia de juego
    
    getComputerChoice(eligio);

}