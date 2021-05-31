import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data = {
    id:0,
    nom:'',
    prenom:'',
    brand_name:'',
    email:'',
    password:'',
    dateNaissance:'',
    tel:'',
    adresse:'',
    laltitude:0,
    longitude:0,
    ville:'',
    coverture:'',
    url:'',
    type:''
  }
  myphoto: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  seConnecter(){
    this.router.navigateByUrl('login');
  }

  register(){

  }

}
