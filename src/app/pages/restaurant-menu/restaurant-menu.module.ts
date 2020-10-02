import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RestaurantMenuPageRoutingModule } from "./restaurant-menu-routing.module";

import { CartPage } from "../../modals/cart/cart.page";
import { CartPageModule } from "../../modals/cart/cart.module";

import { RestaurantMenuPage } from "./restaurant-menu.page";

@NgModule({
  entryComponents: [CartPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantMenuPageRoutingModule,
    CartPageModule,
  ],
  declarations: [RestaurantMenuPage],
})
export class RestaurantMenuPageModule {}
