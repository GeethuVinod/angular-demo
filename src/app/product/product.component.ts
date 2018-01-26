import { ItemDetails } from './../../interfaces/item-details.item_details';
import { ItemStatusDesc } from './../../enums/itemstatus';
import { CartItemsService } from './../cart/cart-items.service';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Title } from '@angular/platform-browser/src/browser/title';
import { debug } from 'util';
import { ElementSchemaRegistry } from '@angular/compiler';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
// variables

 productlist;// list of all electronics products
 cartlist=[];
 product;
 quantity=1;
  constructor(private dataService:DataService,private cartService:CartItemsService) // injecting the service we imported
  //called when instance of a class is created
   {
    
   }
  
  ngOnInit() {
    // called when component is loaded
    this.productlist=this.dataService.loadItemsData()
    this.cartlist=this.cartService.loadCartItems()
      }
      
      isSoldOut(item)
      {
        if(item.ItemStatus==ItemStatusDesc.soldout)
        return true;
            }
  OnClickOfAddToCart(item)
  {
    console.log("button clicked")
    this.cartService.addToCart(item,this.quantity);
  
  }
  checkItemInCart( item:ItemDetails)
  {
    //debugger

    for (var i=0; i < this.cartlist.length; i++) {
      if (this.cartlist[i].Item.ItemId==item.ItemId) {
          return true;
              }
  }
return false;
  }
}
