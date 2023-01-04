class Personnages {
    constructor(age,nom,ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }
}

let newPersonnages1 = new Personnages(22,'Vitor','Bruxelles');
let newPersonnages2 = new Personnages(22,'Lucas','Koekelberg');

console.log(newPersonnages1);
console.log(newPersonnages2);