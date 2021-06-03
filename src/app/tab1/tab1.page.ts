import { Component, OnInit } from '@angular/core';
import  {DataService} from 'src/app/services/data.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private dataService:DataService, public storage: StorageService) { }

  ngOnInit() {
    //this.currentUser = this.storage.get('session');
  }

  getAllAnnoce(){
   
  
      this.dataService.getAllAnnonce();
    
  }

}
