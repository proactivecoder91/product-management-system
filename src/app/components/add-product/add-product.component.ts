import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatSelectModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  addProductForm!: FormGroup;
  productCategories:string[] = ['Electronics','Food','Cosmetics']
constructor(private fb: FormBuilder){
  this.addProductForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      category: [''],
      brand: [''],
      quantityInStock: [''],
      supplier: [''],
      description: [''],
      weight: [''],
      dimensions: [''],
      manufacturingDate:[''],
      availabilityStatus: ['']
  })
}
}
