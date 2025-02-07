import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UicomponentsPage } from './uicomponents.page';

const routes: Routes = [
  {
    path: '',
    component: UicomponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UicomponentsPageRoutingModule {}
