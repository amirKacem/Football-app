import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAnnoncePageRoutingModule } from './edit-annonce-routing.module';

import { EditAnnoncePage } from './edit-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAnnoncePageRoutingModule
  ],
  declarations: [EditAnnoncePage]
})
export class EditAnnoncePageModule {}
