import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscolhaJogadoresPage } from './escolha-jogadores.page';

import { IonicStorageModule } from '@ionic/storage'

const routes: Routes = [
  {
    path: '',
    component: EscolhaJogadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  declarations: [EscolhaJogadoresPage]
})
export class EscolhaJogadoresPageModule {}
