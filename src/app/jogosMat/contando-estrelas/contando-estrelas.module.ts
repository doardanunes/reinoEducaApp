import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContandoEstrelasPageRoutingModule } from './contando-estrelas-routing.module';

import { ContandoEstrelasPage } from './contando-estrelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContandoEstrelasPageRoutingModule
  ],
  declarations: [ContandoEstrelasPage]
})
export class ContandoEstrelasPageModule {}
