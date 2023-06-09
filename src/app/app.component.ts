import { Component } from '@angular/core';
import { IProduct } from './interface/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  name: string = 'Hải';
  products: IProduct[] = [
    {
      id: 1,
      name: "Product 1",
      image: "ádfds",
      price: 200,
      description: "ádfas",
    } ,
    {
      id: 2,
      name: "Product 2",
      image: "ádfds",
      price: 200,
      description: "ádfas",
    } ,
    {
      id: 3,
      name: "Product 3",
      image: "ádfds",
      price: 200,
      description: "ádfas",
    } 
  ]
}
