import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoDaVelhaSoloPage } from './jogo-da-velha-solo.page';

const routes: Routes = [
  {
    path: '',
    component: JogoDaVelhaSoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoDaVelhaSoloPageRoutingModule {}
