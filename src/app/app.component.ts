import { Component } from '@angular/core';
import {Route} from '@angular/router'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // constructor(private route:ActivatedRoute) {
  //   console.log(route.toString);
  //}
}
