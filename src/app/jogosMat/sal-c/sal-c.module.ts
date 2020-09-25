import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalCPageRoutingModule } from './sal-c-routing.module';

import { SalCPage } from './sal-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalCPageRoutingModule
  ],
  declarations: [SalCPage]
})
export class SalCPageModule {}
