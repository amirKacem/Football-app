import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTerrainPage } from './edit-terrain.page';

const routes: Routes = [
  {
    path: '',
    component: EditTerrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTerrainPageRoutingModule {}
