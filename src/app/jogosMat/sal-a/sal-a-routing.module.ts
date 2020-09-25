import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalAPage } from './sal-a.page';

const routes: Routes = [
  {
    path: '',
    component: SalAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalAPageRoutingModule {}
