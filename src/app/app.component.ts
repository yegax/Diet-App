import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
'@angular/router'; // CLI imports router
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
declare var $: any;

@Component({
 selector: 'app-jquery-example',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class JqueryExampleComponent implements OnInit {

constructor() { }

ngOnInit() {
   $(document).ready(function() {
     alert('I am Called From jQuery');
   });
}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diet-app';
}

