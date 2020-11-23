import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosInfoPage } from './pedidos-info.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosInfoPageRoutingModule {}
