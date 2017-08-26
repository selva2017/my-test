import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Product } from '../template/product.interface';
import { Supplier } from '../template/supplier.interface';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  product: FormGroup;
  supplier: FormGroup;
  constructor() { }

  ngOnInit() {
    this.product = new FormGroup({
      productId: new FormControl('999'),
      productCode: new FormControl(''),
      productName: new FormControl(),
      productQuantity: new FormControl(),
      productPrice: new FormControl()
    })
    this.supplier = new FormGroup({
      supplierId: new FormControl('999'),
      supplierName: new FormControl(),
      supplierPhone: new FormControl()
    })
  }
  onSubmit() {
    console.log(this.product.value, this.product.valid);
    console.log(this.supplier.value, this.supplier.valid);
  }

}
