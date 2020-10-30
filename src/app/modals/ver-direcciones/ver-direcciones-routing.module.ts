import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDireccionesPage } from './ver-direcciones.page';

const routes: Routes = [
  {
    path: '',
    component: VerDireccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDireccionesPageRoutingModule {}
