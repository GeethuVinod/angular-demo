import { CartItemsService } from './../cart/cart-items.service';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Title } from '@angular/platform-browser/src/browser/title';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
// variables

 productlist;
 product;
 quantity=1;
  constructor(private dataService:DataService,private cartService:CartItemsService) // injecting the service we imported
  //called when instance of a class is created
   {
    
   }
  
  ngOnInit() {
    // called when component is loaded
    this.productlist=this.dataService.loadItemsData()
      }

  OnClickOfAddToCart(item)
  {
    console.log("button clicked")
    this.cartService.addToCart(item,this.quantity);
  }

}
