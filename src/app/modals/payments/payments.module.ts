import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { PaymentsPage } from './payments.page';

@NgModule({
  entryComponents: [PaymentsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsPageModule,
    ReactiveFormsModule
  ],
  declarations: [PaymentsPage]
})
export class PaymentsPageModule {}
