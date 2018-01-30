import { element } from 'protractor';
import { ItemDetails } from './../../interfaces/item-details.item_details';
import { IcartItemDetails } from './../../interfaces/icart-item-details';
import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../shared-services/cart-items.service';
import { debug } from 'util';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemList: IcartItemDetails[]
  numbers: any[] = [];
  selected_quantity:number=1;
  sub_total:number=0.0;
  shipping_charge:number=150;
  total_amount:number;
  constructor(private cartservice: CartItemsService) {

  }
  
  ngOnInit() {
    console.log("CART COMPONENT LOADED")
    this.cartItemList = this.cartservice.loadCartItems()
    this.calculateSubTotal(this.cartItemList)
    console.log("CART ITEM LIST")
    console.log(this.cartItemList);
  }
 
  onSelect()
  {

this.calculateSubTotal(this.cartItemList)

  }
  calculateSubTotal(cartItemList)
  {
    this.sub_total=0.0;
    cartItemList.forEach(element => {
 
      this.sub_total=this.sub_total+ (element.Item.ItemPrice*element.Quantity)
    });
  }
  checkoutItems(checkoutList)
  {
console.log("checkout list")
console.log(checkoutList)
debugger;
checkoutList.forEach(element => {
 
  this.sub_total=this.sub_total+ (element.Item.ItemPrice*element.Quantity)
});
  }
}
