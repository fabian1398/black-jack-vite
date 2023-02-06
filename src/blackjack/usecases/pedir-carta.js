
/**
 * @param {arr<string>}
 * @returns 
 */

export const pedirCarta = (deck) => {

    // let deck = [];
    
    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}