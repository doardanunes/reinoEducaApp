import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuAvancoPageRoutingModule } from './meu-avanco-routing.module';

import { MeuAvancoPage } from './meu-avanco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuAvancoPageRoutingModule
  ],
  declarations: [MeuAvancoPage]
})
export class MeuAvancoPageModule {}
