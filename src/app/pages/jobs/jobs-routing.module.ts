import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsPage } from './jobs.page';
import { FavoritesPage } from './favorites/favorites.page';

const routes: Routes = [
  {
    path: '',
    component: JobsPage
  },
  {
    path: 'job-page/:id/:title/:companyLogo/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
    loadChildren: () => import('./job-page/job-page.module').then( m => m.JobPagePageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsPageRoutingModule {}
