import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaladaFrutasPage } from './salada-frutas.page';

const routes: Routes = [
  {
    path: '',
    component: SaladaFrutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladaFrutasPageRoutingModule {}
