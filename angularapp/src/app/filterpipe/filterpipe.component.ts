import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filterpipe",
  templateUrl: "./filterpipe.component.html",
  styleUrls: ["./filterpipe.component.css"],
})
export class FilterpipeComponent implements OnInit {
  namesearch: string = "";
  productArr: any[] = [
    {
      sno: 1,
      name: "Mobile",
      price: "7000 Rs",
      availability: "Available",
    },
    {
      sno: 2,
      name: "TV",
      price: "17000 Rs",
      availability: "Available",
    },
    {
      sno: 3,
      name: "Washing Machine",
      price: "170000 Rs",
      availability: "Not Available",
    },
    {
      sno: 4,
      name: "Tab",
      price: "35000 Rs",
      availability: "Available",
    },
    {
      sno: 5,
      name: "Mixer",
      price: "2000 Rs",
      availability: "Not Available",
    },{
      sno: 6,
      name: "Grinder",
      price: "15000 Rs",
      availability: "Available",
    },
    {
      sno: 7,
      name: "Samsung LED",
      price: "77000 Rs",
      availability: "Available",
    },
    {
      sno: 8,
      name: "Washing Machine",
      price: "170000 Rs",
      availability: "Not Available",
    },
    {
      sno: 9,
      name: "Laptpo",
      price: "35000 Rs",
      availability: "Available",
    },
    {
      sno: 10,
      name: "Fridge",
      price: "22000 Rs",
      availability: "Not Available",
    },
        


  ];

  constructor() {}

  ngOnInit() {}

  AddProduct(productname){
    this.productArr.push({
      
      name:productname.value,

    })
  }
}
