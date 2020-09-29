import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRegPageRoutingModule } from './modal-reg-routing.module';

import { ModalRegPage } from './modal-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRegPageRoutingModule
  ],
  declarations: [ModalRegPage]
})
export class ModalRegPageModule {}
