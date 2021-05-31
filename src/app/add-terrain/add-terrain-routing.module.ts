import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTerrainPage } from './add-terrain.page';

const routes: Routes = [
  {
    path: '',
    component: AddTerrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTerrainPageRoutingModule {}
