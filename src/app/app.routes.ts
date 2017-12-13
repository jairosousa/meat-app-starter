import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "app/restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "app/restaurant-detail/reviews/reviews.component";
import { OrderSumaryComponent } from "app/order-sumary/order-sumary.component";
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { LoginComponent } from 'app/security/login/login.component';
import { LoggedInGuard } from 'app/security/loggedin.guard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path:'', redirectTo: 'menu', pathMatch: 'full'},
      {path:'menu', component: MenuComponent},
      {path:'reviews', component: ReviewsComponent}
    ] },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'order', loadChildren: './order/order.module#OrderModule',
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: 'order-sumary', component: OrderSumaryComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '**', component: NotFoundComponent }
];