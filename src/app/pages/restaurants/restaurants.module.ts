import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RestaurantsPageRoutingModule } from "./restaurants-routing.module";
import { PipeModule } from "../../pipes/pipe/pipe.module";

import { RestaurantsPage } from "./restaurants.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    RestaurantsPageRoutingModule,
  ],
  declarations: [RestaurantsPage],
})
export class RestaurantsPageModule {}
