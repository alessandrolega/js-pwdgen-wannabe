/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
aggiungiamo alla fine un numero
Infine scriviamo sulla pagina "la tua password insicurissima è: nomecognomecolorepreferito21" */

let Name = prompt('Write Your Name Here:');

console.log(Name)

let Surname = prompt('Write Your Surname Here:');

console.log(Surname)

let FavColour = prompt('Write Your Favourite Color Here:');

console.log(FavColour)

let Sentence = `Your Super Unsafe Password is ${Name}${Surname}${FavColour} 21`

document.getElementById('sentence').innerHTML =
`Your Super Unsafe Password is ${Name}${Surname}${FavColour}21`