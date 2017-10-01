import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/munu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = []

    constructor(
        private notificationService: NotificationService
    ){}

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    increaseQty(item: CartItem) {
        item.quantify = item.quantify + 1
    }
    decreaseQty(item: CartItem) {
        item.quantify = item.quantify - 1
        if (item.quantify === 0) {
            this.removeItem(item)
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
}