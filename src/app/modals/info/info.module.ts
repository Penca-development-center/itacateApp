import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule} from "@ionic/angular";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InfoPage } from "./info.page";
@NgModule({
  entryComponents:[InfoPage],
  imports: [
    CommonModule,
    FormsModule,
    InfoPageModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [InfoPage],
})
export class InfoPageModule {}
