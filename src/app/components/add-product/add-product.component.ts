import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  addProductForm!: FormGroup;
constructor(private fb: FormBuilder){
  this.addProductForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      category: [''],
      brand: [''],
      quantityInStock: [''],
      supplier: [''],
      image: [''],
      description: [''],
      weight: [''],
      dimensions: [''],
      availabilityStatus: ['']
  })
}
}
