import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UicomponentsPageRoutingModule } from './uicomponents-routing.module';

import { UicomponentsPage } from './uicomponents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UicomponentsPageRoutingModule
  ],
  declarations: [UicomponentsPage]
})
export class UicomponentsPageModule {}
