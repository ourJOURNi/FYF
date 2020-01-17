import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeartIconComponent } from '../../components/heart-icon/heart-icon.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [
    HomePage,
    HeartIconComponent]
})
export class HomePageModule {}