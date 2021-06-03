import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from 'src/app/models/client';
import  {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data:Client = {
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
  myphoto: any;

  constructor(private router:Router,private alertController:AlertController,private dataService:DataService) { 

    this.presentAlertConfirm();
  }

  ngOnInit() {
  }

  seConnecter(){
    this.router.navigateByUrl('login');
  }

  register(){
    this.dataService.register(this.data);
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'avez-vous!',
      message: '<strong>Êtes-vous club ou bien un client ??</strong>',
      buttons: [
        {
          text: 'club',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.data.type = 'club';
            document.querySelectorAll('.client').forEach(data=>{
                data.remove();
            });
         
          }
        }, {
          text: 'client',
          handler: () => {
            this.data.type = 'client';
            document.querySelectorAll('.club').forEach(data=>{
              data.remove();
          });
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.presentAlertConfirm();
      event.target.complete();
    }, 2000);
  }
}
