import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { Cplayer } from '../cplayer';
import { CplayerserviceService } from '../cplayerservice.service';


import { User } from '../User';
// import { PlayerCount } from '../PlayerCount';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  loggedIn:boolean;
  notLogged:boolean;

  cplayers: Array<Cplayer>;
  recommendedData: boolean = true;

  // recommendedData: boolean = true;
  constructor(private cplayerService: CplayerserviceService ,private router:Router,private httclient:HttpClient) { }

  ngOnInit() {
    this.loggedInMethod()

    this.cplayerService.getRecommendedList().subscribe(
      (data=>{
        this.cplayers = data;
      // delay(6000)
      }),
      (error=>{console.log("Error!--Token not generated because of Invalid credentials");
      //  this.router.navigate(["/login"]);
      })

    )


    }

    loggedInMethod(){
      if( this.cplayerService.isLoggedIn()==true){
       this.loggedIn=true;
      }
      else{
        this.notLogged=true;
      }
     }





}
