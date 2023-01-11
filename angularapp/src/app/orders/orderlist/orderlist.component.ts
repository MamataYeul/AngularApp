import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productSelected:boolean=false;
  selectedProduct:string;
  addedProduct:any;
  
  onSelectProduct(product){
    this.productSelected=true;
    this.selectedProduct=product; 
  }
  onAddProduct(){
    this.addedProduct=this.selectedProduct;
  }
 


}
