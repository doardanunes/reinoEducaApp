import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContandoEstrelasPage } from './contando-estrelas.page';

const routes: Routes = [
  {
    path: '',
    component: ContandoEstrelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContandoEstrelasPageRoutingModule {}
