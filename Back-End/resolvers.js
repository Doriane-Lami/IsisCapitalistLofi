const fs = require("fs");

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
    let produits = [args.getWorld().products]
    return produits[args.id]
}
function calcCoutProduit(parent, args, context, info){
    let qt = args.quantite
    let somme = (produit.prix*Math.pow(this.croissance,qt)-1)/(produit.croissance -1 )
    produit.prix = produit.prix*Math.pow(this.croissance,qt)
}

function acheterQtProduit(parent, args, context, info){
    let qt = args.quantite
    let id = args.id

    let produit = getProduit(parent, args, context, info)

    if(produit.id == null){
        throw new Error(`Le produit avec l'id ${args.id} n'existe pas`)
    }else{
        produit.quantite = produit.quantite + qt
        argent = argent - calcCoutProduit(parent, args, context, info)
    }

    saveWorld(context)
}

function lancerProductionProduit(parent, args, context, info){
    let produit = getProduit(parent, args, context, info)
    produit.timeleft = produit.vitesse
    // save?
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

