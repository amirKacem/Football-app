import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Terrain } from '../models/Terrain';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-terrain',
  templateUrl: './add-terrain.page.html',
  styleUrls: ['./add-terrain.page.scss'],
})
export class AddTerrainPage implements OnInit {

  terrain:Terrain = {
    id:0,
    user_id:0, 
    categorie:'',
    type:'',
    image_url:'',
    nom:'Terrain Annonyme',
    description:'',
    prix:0,
    longeur:155,
    largeur:300,

  }
  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {
  }
  addterrain(){
    this.dataService.addTerrain(this.terrain);
    this.router.navigateByUrl('tab2');
  }

}
