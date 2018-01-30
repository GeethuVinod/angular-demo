import { ItemDetails } from './../../interfaces/item-details.item_details';
import { IcartItemDetails } from './../../interfaces/icart-item-details';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartItemsService {
  private messageSource = new BehaviorSubject<Number>(0);
  items: any[] = [];
  quantity = 1;

  constructor() { }
  //shared service methods
  numberOfCartItems = this.messageSource.asObservable();
  changeCartItemsCount(count: Number) {
    this.messageSource.next(count)
  }
  addToCart(item, quantity) {
    var itemDetails: any = {};
    itemDetails.Quantity = quantity;
    itemDetails.Item = item;

    if (itemDetails) {
      this.items.push(itemDetails);
      this.changeCartItemsCount(this.items.length)
    }
  }
  loadCartItems() {
     return this.items;

  }
}
