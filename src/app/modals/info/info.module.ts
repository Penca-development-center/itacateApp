import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InfoPage } from "./info.page";

import { InfoPageRoutingModule } from "./info-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InfoPageRoutingModule,
  ],
  declarations: [InfoPage],
})
export class InfoPageModule {}
