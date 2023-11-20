import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { ProductTable} from '../../models/ProductTable';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'productName', 'price', 'category'];
  dataSource: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      (data: ProductTable[]) => {
        this.dataSource = new MatTableDataSource<ProductTable>(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
