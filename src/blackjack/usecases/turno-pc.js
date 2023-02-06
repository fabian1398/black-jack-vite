import { pedirCarta, valorCarta, crearCarta } from "./";
/**
 * 
 * @param {number} puntosMinimos 
 * @param {HTMLElement} puntosHTML 
 * @param {arr<string>} deck 
 */
export const turnoComputadora = 
    ( puntosMinimos, puntosHTML, divCartasComputadora , deck= [] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos con necesarios')
    if(!puntosHTML) throw new Error('argumentos puntosHTML son necesarios')

    let puntosComputadora = 0

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCarta(carta)
        divCartasComputadora.append(imgCarta)

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}