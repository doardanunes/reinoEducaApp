import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatIndexPage } from './mat-index.page';

const routes: Routes = [
  {
    path: '',
    component: MatIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatIndexPageRoutingModule {}
