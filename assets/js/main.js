// Variabili
const kiloMetres = 0.21
const littleAge = 17
const maxAge = 18
const normalAge = 64
const oldAge = 65

// Richedo all'utente i km da percorrere
const kmp = prompt("how many km?")
let km = kiloMetres * kmp

// Richiedo all'utente l'età
const age = prompt("how old are you?")
if (littleAge < maxAge) {
    let minor = (km * 20) / 100
    console.log(minor)

} else if (maxAge >= normalAge){
    let kmNormal = kiloMetres * kmp
    console.log(kmNormal)

} else (age >= oldAge)
    let older = (km * 40) / 100
    console.log(older)    

