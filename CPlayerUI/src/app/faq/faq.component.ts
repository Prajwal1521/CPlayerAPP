import { Component, OnInit } from '@angular/core';
import { CplayerserviceService } from '../cplayerservice.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
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
