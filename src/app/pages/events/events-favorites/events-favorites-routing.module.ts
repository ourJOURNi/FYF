import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsFavoritesPage } from './events-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: EventsFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoingPageRoutingModule {}
