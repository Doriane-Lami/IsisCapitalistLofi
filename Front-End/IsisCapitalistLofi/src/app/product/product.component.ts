import { Component, Input } from '@angular/core';
import { Product } from '../../../world';
import { BACKEND } from "../../../Graphrequests"


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  server = BACKEND + '/'

  @Input()
  product : Product = new Product()

  @Input()
  money : number = 0
}
