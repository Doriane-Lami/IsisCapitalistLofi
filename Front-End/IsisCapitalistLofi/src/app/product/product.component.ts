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

  orientation = Orientation.horizontal
  initialValue = 0
  run = false
  vitesse: number = this.product.vitesse
  auto = false


  _money: number =0;
  @Input()
  set money(value: number) {
    this._money = value;
  }

  @Output() notifyProduction: EventEmitter<Product> = new EventEmitter<Product>();

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
    this.product.quantite += this.qtAchat
    this.notifyProduction.emit(this.product);
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
    console.log("production +1")
    this.product.timeleft = this.product.vitesse
    console.log(this.run)
    this.run = true
    console.log(this.run)
  }



  calcScore() {
    let elapsetime = Date.now() - this.product.lastupdate

    if (!this.product.managerUnlocked) {
      if (this.product.timeleft != null) {
        if (this.product.timeleft <= elapsetime) {
          this.product.timeleft = 0
          this.notifyProduction.emit(this.product);
          //On va informer le monde qu'il faut ajouter le revenu du produit au score du monde
        } else {
          this.product.timeleft = this.product.timeleft - elapsetime
        }
      }
    } else {
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
