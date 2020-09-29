import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VerDireccionesPageRoutingModule } from "./ver-direcciones-routing.module";

import { VerDireccionesPage } from "./ver-direcciones.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VerDireccionesPageRoutingModule,
  ],
  declarations: [VerDireccionesPage],
})
export class VerDireccionesPageModule {}
