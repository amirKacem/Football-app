import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/Annonce';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  data:Annonce={
    id:0,
    userId:null,
    titre:'',
    pub:'',
    image:'',
    dateCreation:'2019-09-20'
  }
  constructor() { }

  ngOnInit() {
  }


  
}
