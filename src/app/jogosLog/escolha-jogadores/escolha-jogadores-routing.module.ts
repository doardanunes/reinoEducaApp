import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';


import { EscolhaJogadoresPage } from './escolha-jogadores.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaJogadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolhaJogadoresPageRoutingModule {}
