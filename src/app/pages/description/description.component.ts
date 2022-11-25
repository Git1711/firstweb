import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderdetailsService) { }

  getProductId:any;
  productData:any;
  ngOnInit(): void {
  this.getProductId=this.param.snapshot.paramMap.get('productId');
  console.log(this.getProductId,'getproduct');
  if(this.getProductId)
  {
   this.productData=this.service.productDetails.filter((value)=> {
      return value.productId==this.getProductId;
    });
    console.log(this.productData,'productData>>');
  }
  }

}
