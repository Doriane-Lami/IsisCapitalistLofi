import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../world';
import { BACKEND } from "../../../Graphrequests"
import { BigvaluePipe } from '../bigvalue.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MyProgressBarComponent, Orientation } from '../../progressbar.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [BigvaluePipe, MyProgressBarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  server = BACKEND + '/'

  @Input()
  product: Product = new Product()

  @Input()
  set prod(value: Product) {
    this.product = value;
    this.vitesse = this.product.vitesse
  }

  orientation = Orientation.horizontal
  initialValue = 0
  run = false
  vitesse: number = 0
  auto = false

  _money: number =0;
  @Input()
  set money(value: number) {
    this._money = value;
  }

  @Output() notifyProduction: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() notifyBuy: EventEmitter<number> = new EventEmitter<number>();

  _qtmulti: string = 'x1';
  @Input()
  set qtmulti(value: string) {
    this._qtmulti = value;
    if (this._qtmulti && this.product) this.calcMaxCanBuy();
  }

  ngOnInit() {
    setInterval(() => {
      this.calcScore();
    }, 100);
  }

  qtAchat : number = 0;
  getQtAchat() {  
    switch(this._qtmulti) {
      case 'x1':
        this.qtAchat = 1;
        break;
      case 'x10':
        this.qtAchat = 10;
        break;
      case 'x100':
        this.qtAchat = 100;
        break;
      case 'Max':
        this.qtAchat = 1;
        break;
      default:
        break;
    }
  }

  BuyProduct(){
    this.getQtAchat()
    if(this._money >= this.qtAchat * this.product.cout){
      this.product.quantite += this.qtAchat
      let coutTot= this.qtAchat * this.product.cout
      this.notifyBuy.emit(coutTot);
    }
  }


  progressbarvalue: number = 0
  setProgress(value: number) {
    if (value >= 0 && value <= 100) {
      this.progressbarvalue = value;
    } else if (value < 0) {
      this.progressbarvalue = 0;
    } else {
      this.progressbarvalue = 100;
    }
  }

  startFabrication() {
    this.product.timeleft = this.product.vitesse
    this.product.lastupdate = Date.now()
    this.run = true
    }

  calcScore() {
    let elapsetime = Date.now() - this.product.lastupdate
    if (!this.product.managerUnlocked) { //Si on a pas de manager
      if (this.product.timeleft != 0) { //Si le produit est effectivement en production
        this.product.lastupdate = Date.now() //on met à jour la date de dernière mise à jour sinon lastupdate ne fait qu'augmenter
        if (this.product.timeleft <= elapsetime) { // Si le produit a eu le temps d'être créé
          this.product.timeleft = 0
          this.notifyProduction.emit(this.product);
          this.run = false
          //On va informer le monde qu'il faut ajouter le revenu du produit au score du monde
        } else {
          this.product.timeleft = this.product.timeleft - elapsetime //On met a jour le temps restant
          // on met à jour la barre de progression
          this.progressbarvalue = ((this.product.vitesse - this.product.timeleft) / this.product.vitesse) * 100
        }
      }
    } else { // S'il y a un manager
      let nbObjetsCrees = Math.floor(elapsetime / this.product.vitesse)
      this.product.timeleft = this.product.vitesse - elapsetime % this.product.vitesse
      for (let i = 0; i < nbObjetsCrees; i++) {
        this.notifyProduction.emit(this.product);
      } //On informe le monde à chaque produit créé
      this.product.lastupdate = Date.now()
    }
  }

  calcMaxCanBuy() { }

}
