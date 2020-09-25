import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalBPage } from './sal-b.page';

const routes: Routes = [
  {
    path: '',
    component: SalBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalBPageRoutingModule {}
