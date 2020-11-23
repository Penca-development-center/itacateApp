import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";


import { VerDireccionesPage } from "./ver-direcciones.page";

@NgModule({
  entryComponents:[VerDireccionesPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VerDireccionesPageModule
  ],
  declarations: [VerDireccionesPage],
})
export class VerDireccionesPageModule {}
