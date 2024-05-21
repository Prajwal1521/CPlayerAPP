// done
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cplayer } from '../cplayer';
import { CplayerserviceService } from '../cplayerservice.service';
import { PlayerdetailsComponent } from '../playerdetails/playerdetails.component';
import { Location } from '@angular/common';
import { User } from '../User';
export const TOKEN_NAME = "token";
const tk="tk";

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {

  @Input()
  cplayer: Cplayer;

  user:User;
  username:any;

  // @Input()
  // fullName:Cplayer["fullName"]; //here i have to take value from cplayer.ts

  // @Input()
  // pid:Cplayer["pid"];

  // @Input()
  // name:Cplayer["name"];


  matCard=document.getElementsByClassName("example-card");


  @Input()
  favoritedata: boolean;

  @Output()
  addToFavoriteList = new EventEmitter();



  @Input()
  recommendedData: boolean;

  @Output()
  addToRecommendedList = new EventEmitter();

  // @Input()
  // loggedIn:boolean;

  loggedIn:boolean;
  dataa:any;



  constructor(private httclient:HttpClient ,public dialog: MatDialog,private cplayerservice:CplayerserviceService,private router:Router,public _location:Location,private route:ActivatedRoute) {
    this.user=new User()
   }




  ngOnInit(): void {
    // console.log("onInit from playerlist.ts")
    // console.log(this.cplayer);
    // console.log(this.fullName)
    // this.fullName=this.cplayer.fullName;
    // this.pid=this.cplayer.pid;
    // this.name=this.cplayer.name;
    //For test pusrpose
    // this.fullName="Prajwal Mendhkar"
    // this.pid="100"
    // this.name="Prajju"
    // console.log(this.user.username);

    // if(TOKEN_NAME!=null){
    //   this.loggedIn=true;
    // }

    this.loggedInMethod();

  }


  getDetails() {
    const dialogRef = this.dialog.open(PlayerdetailsComponent, {
      height: '75vh',
      width: '60vw',
      data: { pid: this.cplayer.pid }
      //I have get pid from cplayer---this.cplayer.pid


    });
    console.log(this.cplayer.pid);

  }

  addToFavorite(cplayer: Cplayer) {
     this.addToFavoriteList.emit(cplayer);


    }

  deleteFromFavourite(cplayer:Cplayer){
      console.log(cplayer);
      // const url="http://localhost:7072/api/v1/favoriteservice/user/Prajwal1521/player"
      // return this.httclient.delete(url)
      this.cplayerservice.deletePlayerFromFavouriteList(cplayer).subscribe(data=>{
        console.log(data);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });


      })




    }

  addToRecommended(cplayer:Cplayer){
    console.log("add to recom from playerlist");
    console.log(cplayer);
     this.addToRecommendedList.emit(cplayer);
     console.log("emmited");


    }



    deleteFromRecommended(cplayer:Cplayer){
      console.log(cplayer);
      // const url="http://localhost:7072/api/v1/favoriteservice/user/Prajwal1521/player"
      // return this.httclient.delete(url)
      this.cplayerservice.deletePlayerFromRecommendedList(cplayer).subscribe(data=>{
        console.log(data);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });


      })




    }

    loggedInMethod(){
     if( this.cplayerservice.isLoggedIn()==true){
      this.loggedIn=true;
     }
     else{
     }
    }


    }

















  // addToFavorite(cplayer: Cplayer) {
  //   console.log("clicked add to favourite...");
  //   if(this.cplayerservice.getToken(this.user).subscribe(
  //     data=>{console.log(data);if(data['token'] !=null || data['token']!=""){
  //       console.log("User validated and he has the token");

  //     }}
  //   )
  //   ){
  //     // document.getElementById("favbtn")?.removeAttribute("disabled");
  //     this.addToFavoriteList.emit(cplayer);
  //     console.log(this.addToFavoriteList);

  //   }
  //   else{
  //     console.log("Sorry please login...")
  //     // this.router.navigate(['/login']);
  //   }



  // }


