import { Component, OnInit } from '@angular/core';
import { CplayerserviceService } from '../cplayerservice.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  loggedIn: boolean;
  notLogged: boolean;

  constructor(private cplayerService:CplayerserviceService) { }

  ngOnInit(): void {
    if( this.cplayerService.isLoggedIn()==true){
      this.loggedIn=true;
     }
     else{
       this.notLogged=true;
     }
  }
  }


