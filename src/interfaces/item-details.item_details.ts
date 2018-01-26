//import { Stream } from "stream";
import {ItemStatusDesc} from '../enums/itemstatus'


export interface ItemDetails {
    ItemId:String;
    ItemName:String;
    ItemPrice:Number;
    ItemStatus:ItemStatusDesc;
    
}
