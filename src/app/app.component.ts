import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import products from './products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: any = products;

  constructor(private http: HttpClient) {}
}
