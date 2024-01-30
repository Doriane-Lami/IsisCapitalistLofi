const fs = require("fs");
const {products, lastupdate} = require("./world");

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
    let produits = [context.world.products]
    let produit = produits.find(p => p.id === args.id) ?? throw new Error(`Le produit avec l'id ${args.id} n'existe pas`)
    return produit
}

function getManager(parent, args, context, info){
    let managers = [context.world.managers]
    let manager = managers.find(m => m.name === args.name) ?? throw new Error(`Le manager avec le nom ${args.name} n'existe pas`)
    return manager
}

function getProduitManager(manager){
    let produits = [context.world.products]
    let produit = produits.find(p => p.id === manager.idcible) ?? throw new Error(`Le manager n'a pas de produit`)
    return produit
}

function calcCoutProduit(produit, qt){
    let somme = (produit.prix*Math.pow(produit.croissance,qt)-1)/(produit.croissance -1 )
    produit.prix = produit.prix*Math.pow(produit.croissance,qt)
    return somme
}

function acheterQtProduit(parent, args, context, info){
    let qt = args.quantite
    let id = args.id

    let produit = getProduit(parent, args, context, info)

        produit.quantite = produit.quantite + qt
        argent = argent - calcCoutProduit(produit, qt)

    saveWorld(context)
    return produit
}

function lancerProductionProduit(parent, args, context, info){
    let produit = getProduit(parent, args, context, info)
    produit.timeleft = produit.vitesse
    saveWorld(context)
    return produit
}

function engagerManager(parent, args, context, info){
    let manager = getManager(parent, args, context, info)
    let produit = getProduitManager(manager)
    produit.managerUnlocked = true
    manager.unlocked = true
    saveWorld(context)
    return manager
}

function updateScore(parent, args, context, info){
    let produits = [context.world.products]
    let tempsecoule = Date.now() - lastupdate.parseInt()
    for(let i = 0; i<6 ; i = i +1){
        if(!produits[i].managerUnlocked){
            if(timeleft != null && timeleft < tempsecoule){
                score = score + produits[i].revenu
            }else{
                timeleft = timeleft - tempsecoule
            }
        }else{
        }
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
    }
};

