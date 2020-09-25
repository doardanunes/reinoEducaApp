import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContAPageRoutingModule } from './cont-a-routing.module';

import { ContAPage } from './cont-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContAPageRoutingModule
  ],
  declarations: [ContAPage]
})
export class ContAPageModule {}
