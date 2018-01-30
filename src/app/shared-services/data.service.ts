import { Injectable } from '@angular/core';
import { ItemDetails } from '../../interfaces/item-details.item_details'
import { ItemStatusDesc } from '../../enums/itemstatus';
@Injectable() //emits metadata-whether to inject any dependency to this
export class DataService {
  itemList: ItemDetails[] =
    [
      {
        "ItemId": "0001",
        "ItemName": "Philips Beard Trimmer Cordless for Men QT4001/15",
        "ItemPrice": 1299,
        "ItemStatus": ItemStatusDesc.instock,
        "Path": "assets/images/item_001.jpg"

      },

      {
        "ItemId": "0002",
        "ItemName": "Philips HP8302 Essential Selfie Straightener (Black)",
        "ItemPrice": 1079,
        "ItemStatus": ItemStatusDesc.instock,
        "Path": "assets/images/item_002.jpg"

      },
      {
        "ItemId": "0003",
        "ItemName": "Philips HP 8643 Hair Straightener and Hair Dryer Combo Pack (Miss Fresher's Pack)",
        "ItemPrice": 19000,
        "ItemStatus": ItemStatusDesc.soldout,
        "Path": "assets/images/item_003.jpg"

      },
      {
        "ItemId": "0004",
        "ItemName": "Philips HP8646 Kerashine Dryer and Straightener (Black)",
        "ItemPrice": 14999,
        "ItemStatus": ItemStatusDesc.instock,
        "Path": "assets/images/item_004.jpg"

      },
      {
        "ItemId": "0005",
        "ItemName": "boAt BassHeads 225 Special Edition In-Ear Headphones with Mic (Blue)",
        "ItemPrice": 699,
        "ItemStatus": ItemStatusDesc.instock,
        "Path": "assets/images/item_005.jpg"

      },

    ];
  constructor() { }


  loadItemsData() {
    // make a http call to service and load data
    return this.itemList;

  }
}