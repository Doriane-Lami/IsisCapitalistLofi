import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { World, Palier, Product } from '../../world';
import { WebserviceService } from './webservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'IsisCapitalistLofi';

  world: World = new World();
  constructor(private service: WebserviceService) {
    service.getWorld().then(
      world => {
        this.world = world.data.getWorld;
      });
  }

}

