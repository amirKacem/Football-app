import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Annonce } from '../models/Annonce';
import { Client } from '../models/client';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ip= 'localhost'
  private urlRoute = 'http://'+this.ip+'/api.php';
  constructor(private router:Router,
            private httpClient: HttpClient,
            public storage: StorageService,
            private alertController:AlertController) { }



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
       
         if(res.id){
           this.storage.set('session',res);
           this.router.navigateByUrl('home');
         }else{
           this.presentAlertConfirm('Invalid nom d\'utilisateur ou mot de passe !!!');
         }
      });
  }

  getAllAnnonce(){
    return this.httpClient.post<Annonce[]>(this.urlRoute,{"method":"getAllAnnonce"});
  }

}