import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortIndexPageRoutingModule } from './port-index-routing.module';

import { PortIndexPage } from './port-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortIndexPageRoutingModule
  ],
  declarations: [PortIndexPage]
})
export class PortIndexPageModule {}
