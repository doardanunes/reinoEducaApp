import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuAvancoPage } from './meu-avanco.page';

const routes: Routes = [
  {
    path: '',
    component: MeuAvancoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuAvancoPageRoutingModule {}
