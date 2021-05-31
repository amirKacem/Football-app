import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTerrainPageRoutingModule } from './edit-terrain-routing.module';

import { EditTerrainPage } from './edit-terrain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTerrainPageRoutingModule
  ],
  declarations: [EditTerrainPage]
})
export class EditTerrainPageModule {}
