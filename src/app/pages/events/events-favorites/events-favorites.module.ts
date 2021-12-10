import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../../components/custom-component.module';

import { IonicModule } from '@ionic/angular';

import { GoingPageRoutingModule } from './events-favorites-routing.module';

import { EventsFavoritesPage } from './events-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomComponentsModule,
    IonicModule,
    GoingPageRoutingModule  ],
  declarations: [EventsFavoritesPage]
})
export class EventsFavoritesPageModule {}
