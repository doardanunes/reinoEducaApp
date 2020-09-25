import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatIndexPageRoutingModule } from './mat-index-routing.module';

import { MatIndexPage } from './mat-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIndexPageRoutingModule
  ],
  declarations: [MatIndexPage]
})
export class MatIndexPageModule {}
