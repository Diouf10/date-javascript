/** Devenir Maitre du temps !!!! */

// 1 er janvier à minuit UTC (London)

// format textuel
let dateActuelle = Date();
console.log(dateActuelle); // norme anglo-saxonne

// en secondes
let dateActuelleEnSecondes = Date.now();
console.log(dateActuelleEnSecondes); // nombre de secondes écoulées depuis le 1er janvier 1970



//---------------------------------------------


// objet date (pour la précision)

let datePrecise = new Date(2019, 11, 10, 9, 39);
console.log(datePrecise);

// Au dessus :
    //    - annee (obligatoire)
    //    - mois (obligatoire)

    //    - jour (facultatif) qui commence par 1
    //    - heure (facultatif) qui commence par 0
    //    - minute (facultatif) qui commence par 0
    //    - seconde (facultatif) qui commence par 0
    //    - milliseconde (facultatif) qui commence par 0 à 999


    //---------------------------------------------



    // Les getters et les setters

    let dateActuelle2 = new Date();

    console.log(dateActuelle2.getFullYear());
    console.log(dateActuelle2.getMonth());
    console.log(dateActuelle2.getDate());
    console.log(dateActuelle2.getHours());
    console.log(dateActuelle2.getMinutes());
    console.log(dateActuelle2.getSeconds());
    console.log(dateActuelle2.getMilliseconds());
    console.log(dateActuelle2.getDay()); // 0 = dimanche, 1 = lundi, 2 = mardi, 3 = mercredi, 4 = jeudi, 5 = vendredi, 6 = samedi

    // setters
    dateActuelle2.setFullYear(2020);
    dateActuelle2.setMonth(3);
    
    console.log("\n" + dateActuelle2.getFullYear());

    // UTC (signifie que l'on se base sur le temps universel)
    console.log("\n" + dateActuelle2.getUTCFullYear());





    //---------------------------------------------


    // Transformer une date au format local

        // toLocaleString = jour, mois, année, l'heure, minute, seconde
        // toLocaleDateString = jour, mois, année
        // toLocaleTimeString = l'heure, minute, seconde

    let dateActuelle3 = new Date();

    let dateLocale = dateActuelle3.toLocaleString();
    console.log(dateLocale);
    console.log(dateActuelle3.toLocaleDateString());
    console.log(dateActuelle3.toLocaleTimeString());

    // en précisant la langue
    console.log('\n');
    console.log(dateActuelle3.toLocaleString('fr-FR'));
    console.log(dateActuelle3.toLocaleString('fr-CA'));

    // en précisant les options
    console.log('\n');

    let options = {
        weekday: 'long',    // short (3 premières lettres), narrow (1ère lettre), long (complet)
        year: 'numeric',    // 2-digit (2 chiffres), numeric (4 chiffres)
        month: 'long',      // short (3 premières lettres), narrow (1ère lettre), long (complet), numeric (1 chiffre)
        day: 'numeric'      // 2-digit (2 chiffres), numeric (1 chiffre)
        /**
         * hour: 'numeric',     // 2-digit (2 chiffres), numeric (1 chiffre)
         * minute: 'numeric',   // 2-digit (2 chiffres), numeric (1 chiffre)
         * second: 'numeric'    // 2-digit (2 chiffres), numeric (1 chiffre)
         */
    }

    console.log(dateActuelle3.toLocaleString('fr-FR', options));



    //---------------------------------------------




    // Récupérer le local de l'utilisateur

        // console.log(navigator.language);

    // donc on peut transformer la date en fonction de la langue de l'utilisateur







    //---------------------------------------------

    

    // Template strings 

    // Fini la concaténation avec les +, place aux backticks ``

    // ex1
    // Avant

        //let prenom = 'John';
        //let bonjour = 'Bonjour ' + prenom;
        //console.log(bonjour);

    // Maintenant
    
            let prenom = 'John';
            let bonjour = `Bonjour ${prenom}`;
            console.log(bonjour);




    // ex2
    // avec les dates
    let date = new Date().getFullYear();
    let copyRight = `© ${date} - Tous droits réservés`;
    console.log(copyRight);


    // ou encore plus pratique : des calculs
    let aliments = { fruits: 5, legumes: 3, viandes: 2 }
    let panier = `Il y a ${aliments.fruits + aliments.legumes + aliments.viandes} aliments dans le panier`;
    console.log(panier);

    



