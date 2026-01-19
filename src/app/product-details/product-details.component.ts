import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter<IProduct>();
  //cart: IProduct[] = [];

  getImageUrl(product: IProduct) {
    if (!product) return '';
    // return './assets/images/robot-parts/' + this.product.imageName;
    return 'assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct) {
    //this.cart.push(product);
    //this.buy.emit(product);
    this.buy.emit();
    console.log(`buyButtonClicked for ${product.name} . `);
  }

  getDiscountedClasses(product: IProduct) {
    // discount: product && product.discount > 0,
    if (product.discount > 0) return ['strikethrough'];
    else return [];
  }


  // getFilteredProducts() {
  //     return this.filter === '' 
  //     ? this.products 
  //     // : this.products.filter((product) => product.category === this.filter);
  //     : this.products.filter((product:any) => product.category === this.filter);
  // }

}



