import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../world';
import { BACKEND } from "../../../Graphrequests"
import { BigvaluePipe } from '../bigvalue.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar'



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [BigvaluePipe, MatProgressBarModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  server = BACKEND + '/'

  @Input()
  product: Product = new Product()

  @Input()
  money: number = 0

  @Output() notifyProduction: EventEmitter<Product> = new EventEmitter<Product>();


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
  }

  ngOnInit() {
    setInterval(() => {
      this.calcScore();
    }, 100);
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

}
