import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../shared-services/cart-items.service';
//import {Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
numberofItems:Number;

  constructor(private cartService: CartItemsService) {
    this.numberofItems=cartService.loadCartItems().length;
   }

  ngOnInit() {
    this.cartService.numberOfCartItems.subscribe(numberofItems => this.numberofItems = numberofItems)
  }

}
