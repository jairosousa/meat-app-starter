import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/munu-item.model";

export class ShoppingCartService {

    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            foundItem.quantify = foundItem.quantify + 1
        } else {
            this.items.push(new CartItem(item))
        }
    }
    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
}