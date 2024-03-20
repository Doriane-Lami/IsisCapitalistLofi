import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { World, Palier, Product } from '../../world';
import { WebserviceService } from './webservice.service';
import { BACKEND } from "../../Graphrequests"
import { ProductComponent } from './product/product.component';
import { BigvaluePipe } from './bigvalue.pipe';
import { isNumberObject } from 'node:util/types';
import { resetFakeAsyncZone } from '@angular/core/testing';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, BigvaluePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  qtmulti: string = '';

  world: World = new World();
  server = BACKEND + '/'
  constructor(private service: WebserviceService) {
    this.service.getWorld().then(
      world => {
        this.world = world.data.getWorld;
      });
  }

  ngOnInit() {
    this.qtmulti = 'x1'; // Initialisation à 'x1' lors du lancement du composant
  }

  onBuy(coutTot: number) {
    this.world.money -= coutTot
  }

  onProductionDone(p: Product) {
    this.world.score += p.revenu
    this.world.money += p.revenu
  }

  changeQtMulti() {
    console.log("click");

    switch (this.qtmulti) {
      case 'x1':
        this.qtmulti = 'x10';
        break;
      case 'x10':
        this.qtmulti = 'x100';
        break;
      case 'x100':
        this.qtmulti = 'Max';
        break;
      case 'Max':
        this.qtmulti = 'x1';
        break;
      default:
        break;
    }
  }


}


