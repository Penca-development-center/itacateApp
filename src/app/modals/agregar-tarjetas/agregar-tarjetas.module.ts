import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTarjetasPageRoutingModule } from './agregar-tarjetas-routing.module';

import { AgregarTarjetasPage } from './agregar-tarjetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTarjetasPageRoutingModule
  ],
  declarations: [AgregarTarjetasPage]
})
export class AgregarTarjetasPageModule {}
