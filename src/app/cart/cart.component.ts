import { IcartItemDetails } from './../../interfaces/icart-item-details';
import { Component, OnInit } from '@angular/core';
import{ItemDetails} from'../../interfaces/item-details.item_details'
import { CartItemsService } from './cart-items.service';
import { debug } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItemList:IcartItemDetails[]
 constructor(private cartservice:CartItemsService){

}

  ngOnInit() {
    console.log("CART COMPONENT LOADED")
    this.cartItemList=this.cartservice.loadCartItems()
    console.log("CART ITEM LIST")
    console.log(this.cartItemList);
  }

}
