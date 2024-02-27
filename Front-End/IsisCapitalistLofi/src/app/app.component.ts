import { Component } from '@angular/core';
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
  world: World = new World();
  server = BACKEND + '/'
  constructor(private service: WebserviceService) {
    this.service.getWorld().then(
      world => {
        this.world = world.data.getWorld;
      });
  }

  onProductionDone(p: Product){
    this.world.score += p.revenu
    this.world.money += p.revenu
  }


}


