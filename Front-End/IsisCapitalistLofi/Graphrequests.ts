import {gql} from "@urql/core";

export const GET_WORLD = gql`
query getWorld {
    getWorld {
      upgrades {
        unlocked
        typeratio
        ratio
        idcible
        seuil
        logo
        name
      }
      name
      logo
      money
      score
      totalangels
      activeangels
      angelbonus
      lastupdate
      products {
        paliers {
          unlocked
          typeratio
          ratio
          idcible
          seuil
          logo
          name
        }
        id
        name
        logo
        cout
        croissance
        revenu
        vitesse
        quantite
        timeleft
        managerUnlocked
      }
      allunlocks {
        unlocked
        typeratio
        ratio
        idcible
        seuil
        logo
        name
      }
      angelupgrades {
        unlocked
        typeratio
        name
        logo
        seuil
        idcible
        ratio
      }
      managers {
        name
        logo
        seuil
        idcible
        ratio
        typeratio
        unlocked
      }
      
    }
  }
  `