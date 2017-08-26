import { Component, OnInit } from '@angular/core';
import { Product } from './product.interface';
import { Supplier } from './supplier.interface';
import { ProductAdd } from './product-add.interface';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent {

  product: Product = {
    productId: '123',
    productCode: '',
    productName: '',
    productQuantity: '',
    productPrice: ''
  };
  productAdd: ProductAdd = {
    productId: '123',
    productCode: '',
    productName: '',
    productQuantity: '',
    productPrice: '',
    supplierId: '100'
    };
  supplier: Supplier = {
    supplierId: '100',
    supplierName: '',
    supplierPhone: ''
  };
  constructor() { }
  onSubmit() {
  this.productAdd.productId=this.product.productId;
  this.productAdd.productCode=this.product.productCode;
  this.productAdd.productName=this.product.productName;
  this.productAdd.productQuantity=this.product.productQuantity;
  this.productAdd.productPrice=this.product.productPrice;
  this.productAdd.supplierId=this.supplier.supplierId;
  console.log(this.productAdd);
  console.log(JSON.stringify(this.productAdd));
    let data1 = JSON.stringify(this.product);
    let data2 = JSON.stringify(this.supplier);
    // let data = data1.concat(data2);
    // console.log(data);
    // let var1 = "supplierId";
    // let var2 = this.supplier.supplierId;
    // Object.keys(data1).map(
    //   function (object) {
    //     data1[object]["newKey"] = 'newValue'
    //   });

    // console.log(data1);
    // console.log(data2);
    // console.log(JSON.stringify(this.product));
    // console.log(this.supplier.supplierId);
    // onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    // console.log(value, valid);
  }
}

