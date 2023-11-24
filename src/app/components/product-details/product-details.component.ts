import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatInputModule,MatFormFieldModule, MatIconModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  productDetail:any;
  constructor(private route:ActivatedRoute, private productService:ProductService, private router: Router){}
ngOnInit(){
  this.id = this.route.snapshot.params['id'];
  this.productService.getProductDetail(this.id).subscribe(data => this.productDetail = data,(error)=> console.error(error))
}

navigateBack(){
this.router.navigate(['/productList'])
}
}