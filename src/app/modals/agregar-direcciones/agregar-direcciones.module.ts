import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";


import { AgregarDireccionesPage } from "./agregar-direcciones.page";

@NgModule({
  entryComponents:[
    AgregarDireccionesPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgregarDireccionesPageModule,
    IonicModule,
  ],
  declarations: [AgregarDireccionesPage],
})
export class AgregarDireccionesPageModule {}
