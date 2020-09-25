import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortIndexPage } from './port-index.page';

const routes: Routes = [
  {
    path: '',
    component: PortIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortIndexPageRoutingModule {}
