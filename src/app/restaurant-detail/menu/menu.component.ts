import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RestaurantsService } from "app/restaurants/restaurant/restaurants.service";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "app/restaurant-detail/menu-item/munu-item.model";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(
    private restaurantsService: RestaurantsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurants(this.router.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }

}
