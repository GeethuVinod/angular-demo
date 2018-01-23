import { Injectable } from '@angular/core';
import{ItemDetails} from'../interfaces/item-details.item_details'
import { ItemStatusDesc } from '../enums/itemstatus';

@Injectable() //emits metadata-whether to inject any dependency to this
export class DataService {
  itemList: ItemDetails[] =
  [
      {
          "ItemName": "Philips Beard Trimmer Cordless for Men QT4001/15",
          "ItemPrice": 1299,
          "ItemStatus": ItemStatusDesc.instock
        
         },
          
         {
          "ItemName": "Philips HP8302 Essential Selfie Straightener (Black)",
          "ItemPrice": 1079,
          "ItemStatus": ItemStatusDesc.instock
        
         },
         {
          "ItemName": "Apple Watch Series 1 42mm Smart Watch (Space Gray Aluminum Case, Black Sport Band)",
          "ItemPrice": 19000,
          "ItemStatus": ItemStatusDesc.soldout
        
         },
         {
          "ItemName": "Ticwatch 2 Smartwatch (Charcoal)",
          "ItemPrice": 14999,
          "ItemStatus": ItemStatusDesc.instock
        
         },
  ];
constructor() { }


loadItemsData()
{
// make a http call to service and load data
return this.itemList;
}
}