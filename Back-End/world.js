module.exports = {
    "name": "Lofi Capitalist",
    "logo": "icones/wallpaper.jpg",
    "money": 4,
    "score": 4,
    "totalangels": 0,
    "activeangels": 0,
    "angelbonus": 2,
    "lastupdate": 0,
    "products": [
        {
            "id": 1,
            "name": "Mammillaria elongata",
            "logo": "icones/Item/item1.jpg",
            "cout": 4,
            "croissance": 1.07,
            "revenu": 1,
            "vitesse": 1000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Palier1_Mammillaria_elongata",
                    // Trouver les noms de paliers
                    "logo": "icones/Item/item1.jpg",
                    "seuil": 20,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                    // TODO: Faire en sorte que les palliers ne soient pas null + regarder si c'est "false" ou false
                },
                {
                    "name": "Palier2_Mammillaria_elongata",
                    "logo": "icones/Item/item1.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 2,
            "name": "Rebutia",
            "logo": "icones/Item/item2.jpg",
            "cout": 60,
            "croissance": 1.15,
            "revenu": 60,
            "vitesse": 3000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Palier1_Rebutia",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 25,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Palier2_Rebutia",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 3,
            "name": "Agave",
            "logo": "icones/Item/item3.jpg",
            "cout": 720,
            "croissance": 1.14,
            "revenu": 540,
            "vitesse": 6000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Palier1_Agave",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 25,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Palier2_Agave",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 4,
            "name": "Echeveria",
            "logo": "icones/Item/item4.jpg",
            "cout": 8640,
            "croissance": 1.13,
            "revenu":4320,
            "vitesse": 12000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Palier1_Echeveria",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 25,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Palier2_Echeveria",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 5,
            "name": "Crassula",
            "logo": "icones/Item/item5.jpg",
            "cout": 103680,
            "croissance": 1.12,
            "revenu": 51840,
            "vitesse": 24000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Palier1_Crassula",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 25,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Palier2_Crassula",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
            ]
        },
        {
            "id": 6,
            "name": "Aloe Aristata",
            "logo": "icones/Item/item6.jpg",
            "cout": 1244160,
            "croissance": 1.11,
            "revenu": 622080,
            "vitesse": 96000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {
                    "name": "Palier1_Aloe_Aristata",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 25,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Palier2_Aloe_Aristata",
                    "logo": "icones/Item/item2.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
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
            "unlocked": false
        },
],
"upgrades": [
    {
        "name": "Upgrade1_All",
        "logo": "icones/icone.png",
        "seuil": 1e3,
        "idcible": 0,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade2_All",
        "logo": "icones/icone.png",
        "seuil": 5e3,
        "idcible": 0,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade1_Mammillaria_elongata",
        "logo": "icones/Item/item1.jpg",
        "seuil": 1e3,
        "idcible": 1,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade2_Mammillaria_elongata",
        "logo": "icones/Item/item1.jpg",
        "seuil": 5e3,
        "idcible": 1,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade1_Rebutia",
        "logo": "icones/Item/item2.jpg",
        "seuil": 1e3,
        "idcible": 2,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade2_Rebutia",
        "logo": "icones/Item/item2.jpg",
        "seuil": 5e3,
        "idcible": 2,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade1_Agave",
        "logo": "icones/Item/item3.jpg",
        "seuil": 1e3,
        "idcible": 3,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade2_Agave",
        "logo": "icones/Item/item3.jpg",
        "seuil": 5e3,
        "idcible": 3,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade1_Echeveria",
        "logo": "icones/Item/item4.jpg",
        "seuil": 1e3,
        "idcible": 4,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade2_Echeveria",
        "logo": "icones/Item/item4.jpg",
        "seuil": 5e3,
        "idcible": 4,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade1_Crassula",
        "logo": "icones/Item/item5.jpg",
        "seuil": 1e3,
        "idcible": 5,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade2_Crassula",
        "logo": "icones/Item/item5.jpg",
        "seuil": 5e3,
        "idcible": 5,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade1_Aloe_Aristata",
        "logo": "icones/Item/item6.jpg",
        "seuil": 1e3,
        "idcible": 6,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
    {
        "name": "Upgrade2_Aloe_Aristata",
        "logo": "icones/Item/item6.jpg",
        "seuil": 5e3,
        "idcible": 6,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    }
],
    "angelupgrades": [
    {
        "name": "Ange déchu",
        "logo": "icones/angel.png",
        "seuil": 10,
        "idcible": 0,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": false
    },
],
    "managers": [
        {
            "name": "Chat_enthousiaste",
            // nom des chats + ordre
            "logo": "icones/Mangager/chat1.png",
            "seuil": 10,
            "idcible": 1,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Chat_rêveur",
            "logo": "icones/Mangager/chat2.png",
            "seuil": 10,
            "idcible": 2,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Chat_sous_caféine",
            "logo": "icones/Mangager/chat3.png",
            "seuil": 10,
            "idcible": 3,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Chat_écrivain",
            "logo": "icones/Mangager/chat4.png",
            "seuil": 10,
            "idcible": 4,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Chat_informaticien",
            "logo": "icones/Mangager/chat5.png",
            "seuil": 10,
            "idcible": 5,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Super_Chat",
            "logo": "icones/Mangager/chat6.png",
            "seuil": 10,
            "idcible": 6,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        }
]};