import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "app/order/order.model";
import 'rxjs/add/operator/map';

import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService {

  constructor(
    private carService: ShoppingCartService, 
    private http: Http,
  ) { }

  itemsValue(): number {
    return this.carService.total()
  }

  cartItems(): CartItem[] {
    return this.carService.items
  }

  increaseQty(item: CartItem) {
    this.carService.increaseQty(item)
  }
  decreaseQty(item: CartItem) {
    this.carService.decreaseQty(item)
  }
  remove(item: CartItem) {
    this.carService.removeItem(item)
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${MEAT_API}/orders`, 
                        JSON.stringify(order),
                        new RequestOptions({headers: headers}))
          .map(response => response.json())
          .map(order => order.id)
  }

  clear() {
    this.carService.clear()
  }

}
