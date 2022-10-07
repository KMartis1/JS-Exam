/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6),
kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD,
tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        if (this.budget > 100_000_000){
            return true
        }
        else {
            return false
        }
        // Galima ir trumpu variantu :)
        // return this.budget > 100_000_000
    }
    
}

const Shrek2 = new Movie('Shrek 2', 'DeVito', 90_000_000);
console.log(`Movie was expensive? - ${Shrek2.wasExpensive()}`)