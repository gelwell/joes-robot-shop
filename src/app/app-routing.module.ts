import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  // Define your routes here
  { path: 'home', component: HomeComponent, title:"Home - Joes's Robot Shop" },
  //{ path: 'catalog/:filter', component: CatalogComponent, title:"Catalog - Joes's Robot Shop" },
  { path: 'catalog', component: CatalogComponent, title:"Catalog - Joes's Robot Shop" },
  { path: 'cart', component: CartComponent , title: "Cart - Joes's Robot Shop" },
  { path: 'sign-in', component: SignInComponent, title: "Sign In - Joes's Robot Shop" },
  { path: 'form-controls', component: TemplateFormControlsComponent, title: "Form Controls - Joes's Robot Shop" },
  { path: 'product/:id', component: ProductDetailsComponent, title: "Product Details - Joes's Robot Shop" },
  { path: '', redirectTo: '/home', pathMatch: 'full' }     
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
