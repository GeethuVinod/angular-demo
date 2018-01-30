import { CartItemsService } from './shared-services/cart-items.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {DataService} from './shared-services/data.service';
import { GarmentsComponent } from './garments/garments.component';
import { PersonalcareComponent } from './personalcare/personalcare.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
// add routes here in form of array of type Route
const appRoutes: Routes = [
  { path: 'electronics', component: ProductComponent },
  { path: 'personal',      component: PersonalcareComponent },
  { path: 'garments',      component: GarmentsComponent },
  { path: 'cart',      component: CartComponent },
  { path: '',
  redirectTo: '/electronics',
  pathMatch: 'full'
},
  
];

@NgModule({
  declarations: [
    
    AppComponent,
    ProductComponent,
    GarmentsComponent,
    PersonalcareComponent,
    NavbarComponent,
    CartComponent,
    
  ],
  imports: [
    //add router array perviously created 
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [DataService,CartItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
