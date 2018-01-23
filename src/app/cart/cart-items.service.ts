import { ItemDetails } from './../../interfaces/item-details.item_details';
import { IcartItemDetails } from './../../interfaces/icart-item-details';
import { Injectable } from '@angular/core';


@Injectable()
export class CartItemsService {
itemDetails = {} as IcartItemDetails;
items=[] as IcartItemDetails[];
quantity=1;
constructor() { }
addToCart(item,quantity)
{
  this.itemDetails.ItemName=item.ItemName;
  this.itemDetails.ItemPrice=item.ItemPrice;
  this.itemDetails.Quantity=quantity;
this.items.push(this.itemDetails);
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
