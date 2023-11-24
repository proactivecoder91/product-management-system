import { Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {path:'', component:AddProductComponent},
    {path:'productList', component:ProductListComponent},
    {path:'productDetails/:id', component:ProductDetailsComponent},
];
