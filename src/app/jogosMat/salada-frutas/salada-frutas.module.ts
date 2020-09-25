import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladaFrutasPageRoutingModule } from './salada-frutas-routing.module';

import { SaladaFrutasPage } from './salada-frutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladaFrutasPageRoutingModule
  ],
  declarations: [SaladaFrutasPage]
})
export class SaladaFrutasPageModule {}
