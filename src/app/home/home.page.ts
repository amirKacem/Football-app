import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storageService:StorageService,private router:Router) {}


  logout(){
    this.storageService.remove('session');
    this.router.navigateByUrl('/login');
  }
}
