import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalCPage } from './sal-c.page';

const routes: Routes = [
  {
    path: '',
    component: SalCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalCPageRoutingModule {}
