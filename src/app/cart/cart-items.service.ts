import { ItemDetails } from './../../interfaces/item-details.item_details';
import { IcartItemDetails } from './../../interfaces/icart-item-details';
import { Injectable } from '@angular/core';


@Injectable()
export class CartItemsService {
items: any[] = [];
quantity=1;
constructor() { }
addToCart(item,quantity)
{
 
  var itemDetails: any ={};
  itemDetails.Quantity=quantity;
  itemDetails.Item=item;
  
  if(itemDetails)
  {
    this.items.push(itemDetails);
  }

console.log("after pushing data to cart-addtocart method")
console.log(this.items);

}
loadCartItems()
{
  console.log("loaded items using service")
  console.log(this.items);
  return this.items;
  
}
}
