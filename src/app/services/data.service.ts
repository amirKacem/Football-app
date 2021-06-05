import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Annonce } from '../models/Annonce';
import { Client } from '../models/client';
import { StorageService } from './storage.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Observable } from 'rxjs';
import { Terrain } from '../models/Terrain';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ip= 'localhost'
  private urlRoute = 'http://'+this.ip+'/api.php';
  private urlServiceAddImage = this.urlRoute+"/upload.php"
  private currentUser;
  constructor(private router:Router,
            private httpClient: HttpClient,
            public storage: StorageService,
            private alertController:AlertController,
            private transfer: FileTransfer) { }



        async presentAlertConfirm(_message:string) {
              const alert = await this.alertController.create({
                header: 'Error',
                message: _message,
                buttons: [
                 {
                    text: 'OK',
                    handler: () => {
                      console.log('Confirm Okay');
                    }
                  }
                ]
              });
          
              await alert.present();
        }

    register(clientApp:Client) {
        let Data ={
                  'nom':clientApp.nom,
                  'prenom':clientApp.prenom,
                  'brand_name':clientApp.brand_name,
                  'email':clientApp.email,
                  'password':clientApp.password,
                  'dateNaissance':clientApp.dateNaissance,
                  'tel':clientApp.tel,
                  'adresse':clientApp.adresse,
                  'ville':clientApp.ville,
                  'type':clientApp.type,
                  'method':'register'
                };
        this.httpClient.post(this.urlRoute,Data)
                .subscribe( (data:Client) => {
                     console.log(data);
                     if(data.id){
                      this.router.navigateByUrl('login');
                     }else{
                      this.presentAlertConfirm('<h4 style="color:red;">cette adresse email existe déjà</h4>!!!');
                     }
                
                    
            });
        
    }

   
 
  
    login(data){
    data.method = "login";
      this.httpClient.post(this.urlRoute,data).subscribe((res:Client)=>{
        console.log(res);
         if(res.id){
           this.storage.set('session',res);
           this.router.navigateByUrl('home');
         }else{
           this.presentAlertConfirm('Invalid nom d\'utilisateur ou mot de passe !!!');
         }
      });
  }

  updateUser(clientApp:Client) {
    let Data ={
              'id':clientApp.id,
              'nom':clientApp.nom,
              'prenom':clientApp.prenom,
              'brand_name':clientApp.brand_name,
              'email':clientApp.email,
              'password':clientApp.password,
              'dateNaissance':clientApp.dateNaissance,
              'tel':clientApp.tel,
              'adresse':clientApp.adresse,
              'ville':clientApp.ville,
              'type':clientApp.type,
              'method':'updateUser'
            };
    this.httpClient.post(this.urlRoute,Data)
            .subscribe( (data:Client) => {
              this.storage.set('session',Data);
               this.router.navigateByUrl('home');
                
        });
    
  }

   getAllAnnonce(){
    return this.httpClient.post(this.urlRoute,{"method":"getAllAnnonce"});
  }
   

   getAllTerrains(){
    
    return this.httpClient.post(this.urlRoute,{"method":"getAllTerrains"});

  }


  async addAnnonce(annonce){
    await this.storage.get('session').then((res)=>{
      this.currentUser =res;
 
    return res;
    });
  
    console.log( this.currentUser);
    let data ={
        'nom':this.currentUser.nom,
        'prenom':this.currentUser.prenom,
        'brand_name':this.currentUser.brand_name,
        'user_id':this.currentUser.id,
        'type':this.currentUser.type,
        'titre':annonce.titre,
        'pub':annonce.pub,
        'image':'',
        'date_creation':this.formatDate(),
        'method':'addAnnonce'
      };
  this.httpClient.post(this.urlRoute ,data)
      .subscribe(data => {
          console.log(data);
  });
  }

  async addTerrain(terrain){

    await this.storage.get('session').then((res)=>{
      this.currentUser =res;
    return res;
    });
  
    let data ={
        'user_id':this.currentUser.id,
        'categorie':terrain.categorie,
        'type':terrain.type,
        'description':terrain.description,
        'prix':terrain.prix,
        'nom':terrain.nom,
        'longeur':terrain.longeur,
        'largeur':terrain.largeur,
        'method':"addTerrain"
      };
    this.httpClient.post(this.urlRoute ,data)
        .subscribe(data => {
            console.log(data);
    });
  }

  formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

}