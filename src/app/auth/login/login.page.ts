import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data:{
    email:string,
    password:string
  }={
    email:'',
    password:''
  }
  constructor(  private router:Router) { 

  
  }

  ngOnInit() {
  }

  register(){
    this.router.navigateByUrl('register');
  }

}
