import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTerrainPageRoutingModule } from './add-terrain-routing.module';

import { AddTerrainPage } from './add-terrain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTerrainPageRoutingModule
  ],
  declarations: [AddTerrainPage]
})
export class AddTerrainPageModule {}
