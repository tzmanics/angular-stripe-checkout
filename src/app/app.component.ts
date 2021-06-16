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
  private response: any;

  constructor(private http: HttpClient) {}

  async triggerCreateCheckout(eventProduct: any) {
    this.response = await this.http
      .post('/.netlify/functions/createCheckout', eventProduct, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .toPromise();
    this.openStripe(this.response);
  }
}
