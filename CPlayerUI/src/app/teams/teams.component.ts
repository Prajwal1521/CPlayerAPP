import { Component, OnInit } from '@angular/core';
import { CplayerserviceService } from '../cplayerservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  loggedIn:boolean;
  notLogged:boolean;
  constructor(private cplayerService:CplayerserviceService) {

   }

  ngOnInit(): void {
    if( this.cplayerService.isLoggedIn()==true){
      this.loggedIn=true;
     }
     else{
       this.notLogged=true;
     }

  }

}
