import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTarjetasPage } from './agregar-tarjetas.page';

@NgModule({
  entryComponents:[AgregarTarjetasPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  declarations: [AgregarTarjetasPage]
})
export class AgregarTarjetasPageModule {}
