// done
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cplayer } from '../cplayer';
import { CplayerserviceService } from '../cplayerservice.service';
import { User } from '../User';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  cplayers: Array<Cplayer>;
  favoritedata: boolean = true;
  disp_msg_fav:String;
  loggedIn:boolean;
  notLogged:boolean;

  constructor(private cplayerService: CplayerserviceService ,private router:Router,private httclient:HttpClient) { }

  ngOnInit() {
    if( this.cplayerService.isLoggedIn()==true){
      this.loggedIn=true;
     }
     else{
       this.notLogged=true;
     }

      this.cplayerService.getFavoriteList().subscribe(
        (data=>{
          this.cplayers = data;
        // delay(6000)
        }),
        (error=>{console.log("Error!--Token not generated because of Invalid credentials");
        // this.router.navigate(["/login"]);
        })

      )

    }

    login(){
      this.router.navigate(['/login'])
    }


  }



