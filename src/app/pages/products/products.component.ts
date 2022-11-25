import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( private service:OrderdetailsService) { }
  productData:any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}
