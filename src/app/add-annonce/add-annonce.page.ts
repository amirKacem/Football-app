import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../models/Annonce';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  data:Annonce={
    id:0,
    nom:'',
    prenom:'',
    brand_name:'',  
    url:'',
    type:'',
    image:'',
    titre:'',
    pub:'',
    updated_at:'',
    dateCreation:'2021-04-10',
    terrain_id:0
  }
  private terrains;
  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAllTerrains();
  }

  onFileChange(fileChangeEvent){
    this.data.image = fileChangeEvent.target.files[0].name;

  }

  addAnnonce(){
    this.dataService.addAnnonce(this.data);
    this.router.navigateByUrl('tab1');
  }
  getAllTerrains(){
    this.dataService.getAllTerrains().subscribe((res)=>{
      this.terrains = res;
      console.log(this.terrains);
    });

  }
  
  
}
