import { IcartItemDetails } from './../../interfaces/icart-item-details';
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
  productlist: ItemDetails[] = [];// list of all electronics products
  cartlist : IcartItemDetails[]=[];
  product;
  quantity = 1;

  constructor(private dataService: DataService,
    private cartService: CartItemsService,
  ) {

  }

  ngOnInit() {
    // called when component is loaded
debugger;
    this.productlist = this.dataService.loadItemsData()
    this.cartlist = this.cartService.loadCartItems()
    this.numberOfCartItems = this.cartlist.length;
    this.cartService.changeCartItemsCount(this.numberOfCartItems);
  }
  isSoldOut(item) {
    if (item.ItemStatus == ItemStatusDesc.soldout)
      return true;
  }
  OnClickOfAddToCart( item:ItemDetails) {
    debugger;
    this.cartService.addToCart(item, this.quantity);
    var test = this.cartlist;
debugger;
  }
  //update cart list
  OnClickOfDeleteFromCart(item:ItemDetails)
  {
    debugger;
    this.cartService.removeFromCart(item)
    this.cartlist=this.cartService.loadCartItems();
  }
  checkItemInCart(item: ItemDetails) {
    for (var i = 0; i < this.cartlist.length; i++) {
      if (this.cartlist[i].Item.ItemId == item.ItemId) {
            return true;
      }
    }
    return false;
  }
  searchItems(term:string):void
  {
    debugger;
    if (term.length > 0) {
      this.productlist = this.productlist.filter(
        x =>
          x.ItemName.toLowerCase().includes(term.toLowerCase())
        //  x.lastName.toLowerCase().includes(term.toLowerCase()) ||
        //  x.emailAddress.toLowerCase().includes(term.toLowerCase())
      );
    }
    else
    this.productlist=this.dataService.loadItemsData();

  }

}
