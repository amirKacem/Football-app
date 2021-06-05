import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data: Client={
    id:0,
    nom:'',
    prenom:'',
    brand_name:'',
    email:'',
    password:'',
    dateNaissance:'',
    tel:'',
    adresse:'',
    ville:'',
    type:''
}
  constructor(private serviceData:DataService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.serviceData.storage.get('session').then(data=>{
     
       this.data = data
          console.log(data);
          
          if(data.type == 'client'){
              document.querySelectorAll('.club').forEach(_data=>{
                  _data.remove();
              });
          }else{
            document.querySelectorAll('.client').forEach(_data=>{
              _data.remove();
          });
        }
      });
}

  modifierInfo(){
    this.serviceData.updateUser(this.data);

  }
}
