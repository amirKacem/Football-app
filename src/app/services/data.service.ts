import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from '../models/client';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ip= 'localhost'
  private port='8000'
  private urlRoute = 'http://'+this.ip+':8000/api/';
  constructor(private router:Router,
            private httpClient: HttpClient,
            public storage: Storage,
            private alertController:AlertController) { }



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
                  'laltitude':clientApp.laltitude,
                  'longitude':clientApp.longitude,
                  'ville':clientApp.ville,
                  'coverture':clientApp.coverture,
                  'type':clientApp.type
                };
        this.httpClient.post(this.urlRoute + 'clients/add',Data)
                .subscribe(data => {
                     console.log(data);
            });
        
    }



    async presentAlertConfirm(_message:string) {
            const alert = await this.alertController.create({
              header: 'Confirmation',
              message: _message,
              buttons: [
                {
                  text: 'Annuler',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                  }
                }, {
                  text: 'OK',
                  handler: () => {
                    console.log('Confirm Okay');
                  }
                }
              ]
            });
        
            await alert.present();
      }
   
 
  // CONNEXION CLIENT
  connexionClient(data:{email:string,password:string}){
      this.httpClient.post<{id:string}>(this.urlRoute + 'clients/connexion',data).subscribe(res=>{
         if(res[0].id){
           this.storage.set('session',res[0].id);
           this.router.navigateByUrl('tabs/tab1');
         }else{
           this.presentAlertConfirm('<h4 style="color:red;">Donneés Icorrect </h4>!!!');
         }
      });
  }

}