import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarTarjetasPage } from './agregar-tarjetas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarTarjetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarTarjetasPageRoutingModule {}
