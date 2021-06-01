import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private storage: Storage,private navCtrl:NavController) {
    
    this.initalizae
  }
  async ngOnInit() {
    
    await this.storage.create();
  }
  
 
  initalizae(){
    this.storage.get('session').then((res) => {
      console.log(res);
       this.navCtrl.navigateRoot('/login');
       if(res==null){
      }else{
        this.navCtrl.navigateRoot('/home');
      }
    });
  }

}
