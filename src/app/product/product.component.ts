import { ItemDetails } from './../../interfaces/item-details.item_details';
import { ItemStatusDesc } from './../../enums/itemstatus';
import { CartItemsService } from './../shared-services/cart-items.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared-services/data.service';
import { Title } from '@angular/platform-browser/src/browser/title';
import { debug } from 'util';
import { ElementSchemaRegistry } from '@angular/compiler';
import { PaginationService } from 'ngx-pagination';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // variables
  numberOfCartItems: Number = 0;
  itemsPerPage = 4;
  pageCounts = new Array();
  p: number = 1;
  productlist;// list of all electronics products
  cartlist = [];
  product;
  quantity = 1;
  constructor(private dataService: DataService,
    private cartService: CartItemsService,
  ) {

  }

  ngOnInit() {
    // called when component is loaded

    this.productlist = this.dataService.loadItemsData()
    this.cartlist = this.cartService.loadCartItems()
    this.numberOfCartItems = this.cartlist.length;
    this.cartService.changeCartItemsCount(this.numberOfCartItems);
  }

  isSoldOut(item) {
    if (item.ItemStatus == ItemStatusDesc.soldout)
      return true;
  }
  OnClickOfAddToCart(item) {
    this.cartService.addToCart(item, this.quantity);

  }
  checkItemInCart(item: ItemDetails) {
    for (var i = 0; i < this.cartlist.length; i++) {
      if (this.cartlist[i].Item.ItemId == item.ItemId) {
        return true;
      }
    }
    return false;
  }
}
