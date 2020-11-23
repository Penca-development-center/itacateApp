import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { FaqsPage } from './faqs.page';

@NgModule({

  entryComponents: [FaqsPage],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqsPageModule,
    ReactiveFormsModule
  ],
  declarations: [FaqsPage]
})
export class FaqsPageModule {}
