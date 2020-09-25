import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogIndexPageRoutingModule } from './log-index-routing.module';

import { LogIndexPage } from './log-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogIndexPageRoutingModule
  ],
  declarations: [LogIndexPage]
})
export class LogIndexPageModule {}
