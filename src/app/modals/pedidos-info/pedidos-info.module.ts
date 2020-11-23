import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidosInfoPage} from "./pedidos-info.page"

import { IonicModule } from '@ionic/angular';



@NgModule({
  entryComponents: [
    PedidosInfoPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PedidosInfoPageModule,
  ],
  declarations: [PedidosInfoPage]
})
export class PedidosInfoPageModule {}
