import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ui',
    pathMatch: 'full'
  },
  {
    path: 'ui',
    loadChildren: () => import('./page/uicomponents/uicomponents.module').then( m => m.UicomponentsPageModule)
  },
  {
    path: 'component/:id',
    loadChildren: () => import('./page/component/component.module').then( m => m.ComponentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
