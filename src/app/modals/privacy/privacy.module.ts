import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { PrivacyPage } from './privacy.page';

@NgModule({
  entryComponents: [PrivacyPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PrivacyPageModule
  ],
  declarations: [PrivacyPage]
})
export class PrivacyPageModule {}
