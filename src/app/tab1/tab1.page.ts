import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {DataService} from 'src/app/services/data.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private annonces;
  private user;
  constructor(private dataService:DataService, public storage: StorageService,private router: Router) { }

  ngOnInit() {
    //this.currentUser = this.storage.get('session');
  }
  ionViewWillEnter(){
    this.getAllAnnoce();
    this.storage.get('session').then((res)=>{
      this.user =res;
 
    return res;
    });
  }


  getAllAnnoce(){
   
      this.dataService.getAllAnnonce().subscribe((res)=>{
        this.annonces = res;
        console.log(this.annonces);
      });

    
  }

  addAnnonce(){
    this.router.navigateByUrl('add-annonce');
  }

}
