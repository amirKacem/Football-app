import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ip= 'localhost'
  private port='8000'
  private urlDataImage = 'http://'+this.ip+':8000/storage/images/';
  private urlRoute = 'http://'+this.ip+':8000/api/';
  private urlServiceAddImage = 'http://'+this.ip+'/api/upload/user/insertImage.php';
  constructor(private router:Router,
            private httpClient: HttpClient,
            public storage: Storage) { }


  /*uploadImage(myphoto:string){
 
    const fileTransfer: FileTransferObject = this.transfer.create();
    let isErreur: number;
    //random int
    var random = Math.floor(Math.random() * 100);
    var random2 = Math.floor(Math.random() * 100);
    //option transfer
    let options: FileUploadOptions = {
      fileKey: 'photo',
      fileName: "img___" + random + '__'+ random2 + ".jpg",
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: "image/jpeg",
      headers: {}
    }
    //file transfer action
    fileTransfer.upload(myphoto, this.urlServiceAddImage, options)
      .then((data) => {
        isErreur = 0;
      }, (err) => {
        console.log(err);
        isErreur = 1;
        //this.presentLoadingWithOptions();
      });
      return options.fileName;
  }


  register(clientApp) {
      //let url = this.uploadImage(clientApp.url);
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
          'url':"test",
          'type':clientApp.type
        } ;
    this.httpClient.post(this.urlRoute + 'clients/add',Data)
        .subscribe(data => {
            console.log(data);
       });
  }
 
  connexionClient(data:{
    email:string,
    password:string
  })
        this.httpClient.post<{id:string}>(this.urlRoute + 'clients/connexion',data).subscribe(res=>{
          if(res[0].id != "no"){
            this.storage.set('id',res[0].id);
            this.router.navigateByUrl('tabs/tab1');
          }else{
            this.presentAlertConfirm('<h4 style="color:red;">Donneés Icorrect </h4>!!!');
          }
      });
  }*/
}