import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';

import { JogoDaVelhaPage } from './jogo-da-velha.page';

const routes: Routes = [
  {
    path: '',
    component: JogoDaVelhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoDaVelhaPageRoutingModule {}
