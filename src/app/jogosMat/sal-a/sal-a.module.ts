import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalAPageRoutingModule } from './sal-a-routing.module';

import { SalAPage } from './sal-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalAPageRoutingModule
  ],
  declarations: [SalAPage]
})
export class SalAPageModule {}
