import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../../services/data.service';
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
  constructor(  private router:Router,private dataService:DataService ) { 
  }

  ngOnInit() {
  }

  register(){
    this.router.navigateByUrl('register');
  }
  connexionClient(){
    this.dataService.login(this.data);
    
  }
}
