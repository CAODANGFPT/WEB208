import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products!: IProduct[];
  status: boolean = true;
  valueInput: string = "";
  setValue(e: any){
    this.valueInput = e.target.value
  }
  toggle() {
    console.log(1);
    
    this.status = !this.status;
  }

  removeItem(id: any) {
    this.products = this.products.filter(item => item.id !== id);
  }
  
  // removeItem(id: any) {
  //   this.productService.deleteProduct(id).subscribe(() => {
  //     this.products = this.products.filter(item => item._id !== id);
  //   }, (error) => {
  //     console.log(error.message);
  //   })
  // }
  // constructor( private productService: ProductService){
  //   this.productService.getProducts().subscribe(data => {
  //     this.products = data;
  //   })
  // }
}
