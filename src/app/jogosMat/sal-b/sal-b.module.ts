import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalBPageRoutingModule } from './sal-b-routing.module';

import { SalBPage } from './sal-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalBPageRoutingModule
  ],
  declarations: [SalBPage]
})
export class SalBPageModule {}
