import { ItemDetails } from './../../interfaces/item-details.item_details';
import { IcartItemDetails } from './../../interfaces/icart-item-details';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartItemsService {
  private messageSource = new BehaviorSubject<Number>(0);
  shoppingCartItemsList: IcartItemDetails[] = []; // shopping cart shoppingCartItemsList
  quantity = 1;

  constructor() { }
  //shared service methods
  numberOfCartItems = this.messageSource.asObservable();
  changeCartItemsCount(count: Number) {
    this.messageSource.next(count)
  }
  addToCart(item, quantity) {
    debugger;
    var itemDetails ={} as IcartItemDetails ;
    itemDetails.Quantity = quantity;
    itemDetails.Item = item;

    if (itemDetails) {
      this.shoppingCartItemsList.push(itemDetails);
      this.changeCartItemsCount(this.shoppingCartItemsList.length)
    }
  }
  removeFromCart(item:ItemDetails) {
    if(item)
    {
      this.shoppingCartItemsList = this.shoppingCartItemsList.filter(cartitem => cartitem.Item.ItemId !== item.ItemId);
      this.changeCartItemsCount(this.shoppingCartItemsList.length)
    }
      }
  loadCartItems() {
    return this.shoppingCartItemsList;

  }
}
