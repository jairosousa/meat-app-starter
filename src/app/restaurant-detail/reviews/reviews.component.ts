import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RestaurantsService } from "app/restaurants/restaurant/restaurants.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviws: Observable<any>

  constructor(
    private restaurantsService: RestaurantsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviws = this.restaurantsService
      .reviewsOfRestaurant(this.router.parent.snapshot.params['id'])
  }

}
