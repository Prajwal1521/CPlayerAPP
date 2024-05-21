import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cplayer } from '../cplayer';
import { CplayerserviceService } from '../cplayerservice.service';
import { User } from '../User';


@Component({
  selector: 'app-searchplayer',
  templateUrl: './searchplayer.component.html',
  styleUrls: ['./searchplayer.component.css']
})
export class SearchplayerComponent implements OnInit {

  loggedIn:boolean;
  notLogged:boolean;

  cplayers: Array<Cplayer> = [];
  searchPlayers: Array<Cplayer> = [];
  idd: number;
  playername: string;
  pid:String;
  playerObj: Cplayer;
  statusCode: number;
  errorStatus: string;
  country:String;
  user:User;

  // acc="prajwals acc"

  constructor(private routes: ActivatedRoute, private cplayerservice: CplayerserviceService,private router:Router) {
    this.cplayers = [];
    // cplayerservice.test=this.acc;
    cplayerservice.pnameFromkey=this.playername
    cplayerservice.pidFromkey=this.pid
    // console.log(cplayerservice.test);
    // console.log(this.playername);


   }


  ngOnInit() {
    this.loggedInMethod();
    this.cplayerservice.getAllPlayerList()
      .subscribe(player => {
        console.log(player);
        const data = player['data'];
        console.log("hd:"+data);


        this.idd = 0;
        data.forEach(element => {
          // console.log(element);


          this.idd++;
          this.playerObj = new Cplayer();

          this.playerObj.fullName = element["name"];
          this.playerObj.pid = element["id"];
          // this.playerObj.name = element["name"];
          this.playerObj.country=element["country"]
          // console.log( this.playerObj.pid );

          // console.log(this.playerObj);



          this.cplayers.push(this.playerObj);
          //  console.log(this.cplayers);


        });
      });
  }

  onKey(event: any) {



    if (event.keyCode == 13) {
      this.cplayers = [];
      this.playername = event.target.value;

      console.log('playername', this.playername);
      this.cplayerservice.pnameFromkey=this.playername;
      console.log(this.cplayerservice.pnameFromkey);


      this.cplayerservice.getPlayerList(this.playername)
        .subscribe(player => {
          // console.log(player);
          const data = player['data'];

          this.idd = 0;
          data.forEach(element => {

            this.idd++;
            this.playerObj = new Cplayer();

            this.playerObj.fullName = element["name"];
            this.playerObj.pid = element["id"];
            // this.playerObj.name = element["name"];
            this.playerObj.country=element["country"]


            this.cplayers.push(this.playerObj);
            this.searchPlayers.push(this.playerObj);
            console.log(this.playerObj.pid);
            this.cplayerservice.pidFromkey=this.playerObj.pid;
            console.log("mc id:"+this.cplayerservice.pidFromkey);


            console.log(this.searchPlayers);

          });
        });
    }

  }

  addToFavoriteList(cplayer) {
    this.cplayerservice.addPlayerToFavoriteList(cplayer).subscribe(
      {next:data=>
        {console.log(data);


    },
    error:e=>
    {this.errorStatus = `${e.status}`;
    const errorMsg = `${e.error.message}`;
    this.statusCode = parseInt(this.errorStatus, 10);}})
  }

  addToRecommendedList(cplayer){
    this.cplayerservice.addPlayerToRecommendedList(cplayer).subscribe(
      {next:data=>
        {console.log(data);
      },
      error:e=>
      {this.errorStatus=`${e.status}`;
      const errorMsg = `${e.error.message}`;
    this.statusCode = parseInt(this.errorStatus, 10);}})

  }

  loggedInMethod(){
    if( this.cplayerservice.isLoggedIn()==true){
     this.loggedIn=true;
     console.log("pp");

    }
    else{
      this.notLogged=true;
    }
   }


}
