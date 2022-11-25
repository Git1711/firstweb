import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

    // productdetails

    productDetails = [
      {
        productId:1,
        productName: "Chairs",
        productDetails: "Chairs for Office",
        productImg: "/assets/img/chair.jpg"
      },
      {
        productId:2,
        productName: "Modular",
        productDetails: "Cubicles for Office",
        productImg: "/assets/img/modular.jpg"
      },
      {
        productId:3,
        productName: "Sofa",
        productDetails: "Multi-Seater for Office",
        productImg: "/assets/img/sofa.jpg"
      },
      {
        productId:4,
        productName: "Table",
        productDetails: "Center-tables for Office",
        productImg: "/assets/img/table.jpg"
      },
    ] 





  }
