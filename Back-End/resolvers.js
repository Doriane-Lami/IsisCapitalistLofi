const fs = require("fs");
let {products, lastupdate, managers, allunlocks, score} = require("./world");

function saveWorld(context) {
    fs.writeFile("userworlds/" + context.user + "-world.json",
        JSON.stringify(context.world), err => {
            if (err) {
                console.error(err)
                throw new Error(
                    `Erreur d'écriture du monde coté serveur`)
            }
        })
}

function getProduit(parent, args, context, info){
    let produits = context.world.products
    let produit = produits.find(p => p.id === args.id);
    if (!produit) {
        throw new Error(`Le produit avec l'id ${args.id} n'existe pas`);
    }
    return produit
}

function getManager(parent, args, context, info){
    let managers = context.world.managers
    let manager = managers.find(m => m.name === args.name)
    if (!manager) {
        throw new Error(`Le manager avec le nom ${args.name} n'existe pas`)
    }
    return manager
}

function getProduitManager(manager, context){
    let produits = context.world.products
    let produit = produits.find(p => p.id === manager.idcible)
    if (!produit) {
        throw new Error(`Le manager n'a pas de produit`)
    }
    return produit
}

function calcCoutProduit(produit, qt){
    // somme prend en compte les objets déjà achetés
    let somme = Math.round(produit.cout*(Math.pow(produit.croissance,produit.quantite - 1) -1)/(produit.croissance -1 )) - Math.round(produit.cout*(Math.pow(produit.croissance, produit.quantite - 1 - qt) -1)/(produit.croissance -1 ))
    // TODO : Vérifier avec Doriane qu'on a la même fonction
    console.log("somme = " + somme)
    //produit.prix = produit.prix*Math.pow(produit.croissance,qt)
    //console.log("produit.prix = " + produit.prix)
    return somme
}

function calcQtProductionforElapseTime(produit, tempsecoule){
    if(!produit.managerUnlocked){
        if(produit.timeleft !=  0) {
            // si le produit était en production on passe
            if (produit.timeleft <= tempsecoule) {
                // si le produit a eu le temps d'être créé
                produit.timeleft = 0
                return 1
            } else {
                produit.timeleft -= tempsecoule
                return 0
            }
        }else{
            return 0
        }

    }else{
        tempsecoule += produit.vitesse-produit.timeleft
        let nb_objet_crees = Math.floor(tempsecoule/produit.vitesse)
        produit.timeleft = produit.vitesse - tempsecoule%produit.vitesse
        return nb_objet_crees
    }
}

function calcQtProductionforElapseTime2(product, tempsecoule){
    if (!product) {
        throw new Error(`Le produit avec l'id ${args.id} n'existe pas`);
    }
    if(!product.managerUnlocked){
        if(product.timeleft !==  0) {
            // si le produit était en production on passe
            if (product.timeleft <= tempsecoule) {
                // si le produit a eu le temps d'être créé
                product.timeleft = 0
                return 1
            } else {
                product.timeleft -= tempsecoule
                /*
                if(!Number.isInteger(product.timeleft)){
                    throw new Error(`Timeleft n'est pas de type int ${product.timeleft} code_erreur = 1`);
                }

                 */
                return 0
            }
        }else{
            return 0
        }

    }else{

        //Coline

        tempsecoule += product.vitesse-product.timeleft
        let nb_objet_crees = Math.floor(tempsecoule/product.vitesse)
        product.timeleft = product.vitesse - tempsecoule%product.vitesse
        if(product.timeleft == null){
            throw new Error(`Timeleft est null ${product.timeleft} code_erreur = 3`);
        }
        if(!Number.isInteger(product.timeleft)){
            throw new Error(`Timeleft n'est pas de type int ${product.timeleft} code_erreur = 2`);
        }

        /*
        // ChatGPT
        let tempsecoule = Date.now() - parseInt(lastupdate);
        tempsecoule += product.vitesse - product.timeleft;

        let nb_objet_crees = Math.floor(tempsecoule / product.vitesse);

        if (!isNaN(tempsecoule) && !isNaN(product.vitesse) && product.vitesse !== 0) {
            product.timeleft = product.vitesse - (tempsecoule % product.vitesse);
        }
        */
        return nb_objet_crees
    }
}

function updateGainVitesse(vitesse, gain, unlock){
    if(unlock.unlocked === "true"){
        if(unlock.typeratio === "vitesse"){
            vitesse = vitesse / unlock.ratio
        }
        if(unlock.typeratio === "gain"){
            gain = gain * unlock.ratio
        }
    }
    return gain,vitesse
}

function implementUnlocks(produit, vitesse, gain, context){
    let nb_palliers = produit.palliers.length
    for(let j = 0; j<nb_palliers ; j++){
        gain, vitesse = updateGainVitesse(vitesse, gain, produit.palliers[j])
    }
    /*
    for(let j = 0; j<nb_palliers ; j++){
        if(produit.palliers[j].unlocked === "true"){
            if(produit.palliers[j].typeratio === "vitesse"){
                vitesse = vitesse / produit.palliers[j].ratio
            }
            if(produit.palliers[j].typeratio === "gain"){
                gain = gain * produit.palliers[j].ratio
            }
        }
    }
     */
    let nb_all_unlocks = context.world.allunlocks.length
    for(let j = 0; j<nb_all_unlocks ; j++){
        gain, vitesse = updateGainVitesse(vitesse, gain, context.world.allunlocks[j])
        /*
        if(context.world.allunlocks.unlocked === "true"){
            if(context.world.allunlocks.typeratio === "vitesse"){
                vitesse = vitesse / produit.palliers[j].ratio
            }
            if(produit.palliers[j].typeratio === "gain"){
                gain = gain * produit.palliers[j].ratio
            }
        }

         */
    }
    return vitesse,gain
}
function updateScore(parent, args, context, info){
    let produits = context.world.products
    let tempsecoule = Date.now() - context.world.lastupdate
    for(let i = 0; i<6 ; i = i +1){
        let produit = produits[i]
        
        let vitesse = produits[i].vitesse
        let gain = produits[i].revenu
        //vitesse, gain = implementUnlocks(produits[i], vitesse, gain, context)

       let nb_objet_crees = calcQtProductionforElapseTime(produits[i], tempsecoule)
        let argentGagne = nb_objet_crees*produit.revenu*produit.quantite
        context.world.score = context.world.score + argentGagne
        context.world.money = context.world.money + argentGagne
        context.world.lastupdate = Date.now()
    }
}

function checkPallier(product){
    // Pas vérifié
    let nb = product.palliers.length
    for(let i = 0; i<nb ; i = i +1){
        if(product.quantite >= product.palliers[i].seuil && product.palliers[i].unlocked == false){
            product.palliers[i].unlocked = true
        }
    }
}

function checkAllUnlocks(parent, args, context, info) {
    // WOW ça marche
    let nb_allunlocks = context.world.allunlocks.length;
    var tableau = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < nb_allunlocks; i++) {
        tableau = [0, 0, 0, 0, 0, 0];
        if (context.world.allunlocks[i].unlocked === false) {
            for (let j = 0; j < 6; j++) {
                if (products[j].quantite >= context.world.allunlocks[i].seuil) {
                    tableau[j] = 1;
                }
            }
            if (JSON.stringify(tableau) === JSON.stringify([1, 1, 1, 1, 1, 1])) {
                context.world.allunlocks[i].unlocked = true;
            }
        }
    }
}


module.exports = {
    Query: {
        getWorld(parent, args, context, info) {
            updateScore(parent, args, context, info)
            saveWorld(context)
            return context.world
        }
    },
    Mutation: {

        acheterQtProduit(parent, args, context, info){

            console.log("Avant le update score, money = " + context.world.money)
            updateScore(parent, args, context, info)

            let qt = args.quantite
            let id = args.id

            let produit = getProduit(parent, args, context, info)

            console.log("Après getProduit, money = " + context.world.money)

            produit.quantite = produit.quantite + qt

            console.log("12, money = " + context.world.money)

            context.world.money = context.world.money - calcCoutProduit(produit, qt)

            console.log("13, money = " + context.world.money)

            //checkPallier(produit)
            //checkAllUnlocks(parent, args, context, info)
            // TODO : vérifier que les fonctions sont ok

            saveWorld(context)
            return produit
        },
        lancerProductionProduit(parent, args, context, info){
            updateScore(parent, args, context, info)
            let produit = getProduit(parent, args, context, info)


            if(produit.timeleft == null) {
                throw new Error(`Le produit est encore en production`);
            }

                produit.timeleft = produit.vitesse

                saveWorld(context)
                return produit
        },
        engagerManager(parent, args, context, info){
            let manager = getManager(parent, args, context, info)
            let produit = getProduitManager(manager, context)
            produit.timeleft = produit.vitesse
            produit.managerUnlocked = true
            manager.unlocked = true

            updateScore(parent, args, context, info)
            saveWorld(context)
            return manager
        }
    }
};

