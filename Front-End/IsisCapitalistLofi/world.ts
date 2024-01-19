export class World {
  name = '';
  logo = '';
  money = 0;
  score = 0;
  totalangels = 0;
  activeangels = 0;
  angelbonus = 0;
  lastupdate = 0;
  products: Product[];
  allunlocks: Palier[];
  upgrades: Palier[];
  angelupgrades: Palier[];
  managers: Palier[];

  constructor() {
    this.products = [];
    this.managers = [];
    this.upgrades = [];
    this.angelupgrades = [];
    this.allunlocks = [];
  }
}

export class Product {
  id = 0;
  name = '';
  logo = '';
  cout = 0;
  croissance = 0;
  revenu = 0;
  vitesse = 0;
  quantite = 0;
  timeleft = 0;
  managerUnlocked = false;
  paliers: Palier[];
  lastupdate = 0;

  constructor() {
    this.paliers = [];
  }
}

export class Palier {
  name = '';
  logo = '';
  seuil = 0;
  idcible = 0;
  ratio = 0;
  typeratio = '';
  unlocked = false;
}
