const fs = require("fs");
let {products, lastupdate, managers} = require("./world");

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
    let somme = (produit.prix*Math.pow(produit.croissance,qt)-1)/(produit.croissance -1 )
    produit.prix = produit.prix*Math.pow(produit.croissance,qt)
    return somme
}
function calcQtProductionforElapseTime(product, tempsecoule){
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
                return 0
            }
        }else{
            return 0
        }

    }else{
        tempsecoule += product.vitesse-product.timeleft
        let nb_objet_crees = Math.floor(tempsecoule/product.vitesse)
        product.timeleft = product.vitesse - tempsecoule%product.vitesse
        return nb_objet_crees
    }
}
function updateScore(parent, args, context, info){
    let produits = context.world.products
    let tempsecoule = Date.now() - parseInt(lastupdate)
    for(let i = 0; i<6 ; i = i +1){
        let nb_objet_crees = calcQtProductionforElapseTime(produits[i], tempsecoule)
        context.world.score = context.world.score + nb_objet_crees*produits[i].revenu*produits[i].qt
        lastupdate = toString(Date.now())
    }
}

module.exports = {
    Query: {
        getWorld(parent, args, context, info) {
            saveWorld(context)
            return context.world
        }
    },
    Mutation: {
        // TODO : Faire en sorte que les managers fonctionnent (pas de nouvelles productions quand ils sont engaggés)

        acheterQtProduit(parent, args, context, info){

            updateScore(parent, args, context, info)

            let qt = args.quantite
            let id = args.id

            let produit = getProduit(parent, args, context, info)

            produit.quantite = produit.quantite + qt
            context.world.money = context.world.money - calcCoutProduit(produit, qt)

            saveWorld(context)
            return produit
        },
        lancerProductionProduit(parent, args, context, info){
            let produit = getProduit(parent, args, context, info)
            produit.timeleft = produit.vitesse

            updateScore(parent, args, context, info)
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

