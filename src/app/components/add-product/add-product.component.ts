import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  addProductForm!: FormGroup;
  productCategories:string[] = ['Electronics','Food','Cosmetics'];
  availabilityStatuses:string[]=['Available','Unavailable'];
constructor(private fb: FormBuilder, private productService:ProductService){
  this.addProductForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.min(1)]],
      category: ['',Validators.required],
      brand: ['', [Validators.required,Validators.maxLength(50)]],
      quantityInStock: ['',[Validators.required, Validators.min(1)]],
      supplier: ['',[Validators.required,Validators.maxLength(50)]],
      description: ['', [Validators.required,Validators.maxLength(100)]],
      weight: ['',[Validators.required, Validators.min(1)]],
      dimensions: ['', Validators.required],
      manufacturingDate:['',Validators.required],
      availabilityStatus: ['',Validators.required]
  })
}

submitProduct(){
  this.productService.addProduct(this.addProductForm.value).subscribe(data => console.log(data), error => console.error(error))
}
}
