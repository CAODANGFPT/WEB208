import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor( 
    private router: ActivatedRoute, 
    private productService: ProductService)
    {
      this.router.paramMap.subscribe((params => {
        const id = Number(params.get('id'));
        this.productService.getProductById(id).subscribe(data => {
          this.product = data;
          console.log(data);
        }, error => console.log(error.message))
      }))
    }
}
