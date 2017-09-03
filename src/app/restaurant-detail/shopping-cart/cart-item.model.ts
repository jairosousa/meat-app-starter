import { MenuItem } from "app/restaurant-detail/menu-item/munu-item.model";

export class CartItem {
    constructor(
        public menuItem: MenuItem,
        public quantify: number = 1
    ) { }

    value(): number {
        return this.menuItem.price * this.quantify
    }
}