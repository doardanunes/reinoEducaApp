import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContBPageRoutingModule } from './cont-b-routing.module';

import { ContBPage } from './cont-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContBPageRoutingModule
  ],
  declarations: [ContBPage]
})
export class ContBPageModule {}
