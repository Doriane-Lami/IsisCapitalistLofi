module.exports = {
    "name": "Lofi Capitalist",
    "logo": "icones/logomonde.jpg",
    // trouver un logo pour notre monde
    "money": 0,
    "score": 0,
    "totalangels": 0,
    "activeangels": 0,
    "angelbonus": 2,
    "lastupdate": 0,
    "products": [
        {
            "id": 1,
            "name": "Cactus",
            // nom plantes + ordre
            "logo": "icones/Item/item1.jpg",
            "cout": 4,
            "croissance": 1.07,
            "revenu": 1,
            "vitesse": 0.5,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "palliers": [
                {
                    "name": "Palier1",
                    // Trouver les noms de paliers
                    "logo": "icones/Item/item1.jpg",
                    "seuil": 25,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                },
                {
                    "name": "Palier2",
                    "logo": "icones/Item/item1.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                },
            ]
        },
        {
            "id": 2,
            "name": "Cactus fleuri",
            "logo": "icones/Item/item2.jpg",
            "cout": 60,
            "croissance": 1.15,
            "revenu": 60,
            "vitesse": 3,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "palliers": [
                {
                    "name": "Palier1",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 25,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                },
                {
                    "name": "Palier2",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                },
            ]
        }
    ],
    "allunlocks": [
        {
            "name": "Unlock_general1",
            "logo": "icones/premierunlock.jpg",
            "seuil": 30,
            "idcible": 0,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": "false"
        },
],
"upgrades": [
    {
        "name": "Upgrade1_Cactus",
        "logo": "icones/Item/item1.jpg",
        "seuil": 1e3,
        "idcible": 1,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": "false"
    },
],
    "angelupgrades": [
    {
        "name": "Ange déchu",
        "logo": "icones/angel.png",
        "seuil": 10,
        "idcible": 0,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": "false"
    },
],
    "managers": [
    {
        "name": "Chat enthousiaste",
        // nom des chats + ordre
        "logo": "icones/Mangager/chat1.png",
        "seuil": 10,
        "idcible": 1,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": "false"
    },
        {
            "name": "Chat rêveur",
            "logo": "icones/Mangager/chat2.png",
            "seuil": 10,
            "idcible": 2,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": "false"
        },
]};