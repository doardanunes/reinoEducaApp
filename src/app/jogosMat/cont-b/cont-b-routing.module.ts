import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContBPage } from './cont-b.page';

const routes: Routes = [
  {
    path: '',
    component: ContBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContBPageRoutingModule {}
