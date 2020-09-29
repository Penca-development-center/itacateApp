import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AgregarDireccionesPageRoutingModule } from "./agregar-direcciones-routing.module";

import { AgregarDireccionesPage } from "./agregar-direcciones.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarDireccionesPageRoutingModule,
  ],
  declarations: [AgregarDireccionesPage],
})
export class AgregarDireccionesPageModule {}
