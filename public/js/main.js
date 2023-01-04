let moi = {
    nom : 'Ebd',
    prenom : 'Yassine',
    age : 23,
    taille : '1m85',
}

console.log(moi);


let autre = {
    nom : 'yo',
    prenom : 'ooooooy',
    age : 26,
    taille : '1m75',
}

let dernier = {
    nom : moi.nom,
    age : moi.age,
    taille :'190cm'
}
console.log(dernier);

let perso1 = {
    nom : 'yoyoyo',
    prenom : 'Yasco',
    sePresenter(){
        console.log(`Bonjour je m'appelle ${perso1.nom} ${perso1.prenom}`);
    }
}
console.log(perso1.sePresenter());


let monDerObj = {
    nom : 'dernier',
    changerAge(){
        let ag = prompt(`Changez votre age`)
        monDerObj.ageee = ag;
    },
    
}
monDerObj.changerAge();
alert(`${monDerObj.nom} a ${monDerObj.ageee}`)