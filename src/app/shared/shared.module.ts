import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from "app/shared/input/input.component";
import { RadioComponent } from "app/shared/radio/radio.component";
import { RatingComponent } from "app/shared/rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestaurantsService } from "app/restaurants/restaurant/restaurants.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { OrderService } from "app/order/order.service";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
              CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [InputComponent, RadioComponent, RatingComponent]
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RestaurantsService, ShoppingCartService, OrderService]
        }
    }
}
