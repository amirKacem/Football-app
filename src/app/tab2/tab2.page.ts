import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private router:Router,private dataService:DataService) { }
  private terrains;
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAllterrains();
  }
  addTerrain(){
    this.router.navigateByUrl('add-terrain');
  }
  getAllterrains(){
    this.dataService.getAllTerrains().subscribe((res)=>{
      this.terrains = res;
    });
    

  }
}
