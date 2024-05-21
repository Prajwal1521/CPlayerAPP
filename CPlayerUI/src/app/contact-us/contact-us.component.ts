import { Component, OnInit } from '@angular/core';
import { CplayerserviceService } from '../cplayerservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
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
