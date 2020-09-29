import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DirectionPageRoutingModule } from "./direction-routing.module";

import { DirectionPage } from "./direction.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DirectionPageRoutingModule,
  ],
  declarations: [DirectionPage],
})
export class DirectionPageModule {}
