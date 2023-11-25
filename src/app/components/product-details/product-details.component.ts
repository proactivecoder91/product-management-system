import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router'
import * as XLSX from 'xlsx';


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

downloadExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([this.productDetail]);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const {id} = this.productDetail 
    this.saveAsExcelFile(excelBuffer, `product_${id}`);
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const downloadLink: HTMLAnchorElement = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(data);
    downloadLink.download = `${fileName}.xlsx`;
    downloadLink.click();
  }

navigateBack(){
this.router.navigate(['/productList'])
}
}