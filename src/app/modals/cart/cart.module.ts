import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";


import { CartPage } from "./cart.page";

@NgModule({
  entryComponents:[CartPage],
  imports: [CommonModule, FormsModule, IonicModule, CartPageModule, ReactiveFormsModule],
  declarations: [CartPage],
})
export class CartPageModule {}
