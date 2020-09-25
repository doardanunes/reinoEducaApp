import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogIndexPage } from './log-index.page';

const routes: Routes = [
  {
    path: '',
    component: LogIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogIndexPageRoutingModule {}
