//done
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Cplayer } from '../cplayer';
import { CplayerserviceService } from '../cplayerservice.service';
import { PlayerDetails } from '../PlayerDetails';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {
  playerDetails: PlayerDetails;
  pid: String;
  fullName:String;



  constructor(private cplayerService: CplayerserviceService
    , private routes: ActivatedRoute,
    public dialogRef: MatDialogRef<PlayerdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public cplayer: Cplayer) {
      this.pid = this.cplayer.pid;
      cplayerService.pidFromkey=this.pid;
      this.fullName=this.cplayer.fullName
      cplayerService.pnameFromkey=this.fullName

      console.log("PPPID"+this.pid);
      console.log("PPPNAME"+this.fullName);


     }

  ngOnInit(): void {
    console.log("i am from playerdetails.ts");

    // this.pid="fd107127-f1f0-4452-b425-e35cf5aae78e";
    // this.cplayerservice.getAllPlayerList()
    // .subscribe(player => {
    //   console.log(player);
    //   const data = player['data'];

    this.cplayerService.getPlayerDetails(this.pid)
    .subscribe(player=>{
      console.log(player);
      const data = player['data'];
      console.log(data);



      this.playerDetails=new PlayerDetails();
      this.playerDetails.fullName=data['name']
      this.playerDetails.pid=data['id']
      this.playerDetails.imageURL=data['playerImg']
      this.playerDetails.battingStyle=data['battingStyle']
      this.playerDetails.born=data['dateOfBirth']
      this.playerDetails.country=data['country']
      this.playerDetails.bowlingStyle=data['bowlingStyle']
      this.playerDetails.role=data['role']
      this.playerDetails.birthPlace=data['placeOfBirth']

      //storing data['stat'] and then converting it to staring
      const d1=data['stats'];

      this.playerDetails.Stats=JSON.stringify(d1);
      this.playerDetails.profile=data['profile']//have to add this
      console.log(this.playerDetails.fullName);

      // data = JSON.parse(data);
      // const data=player;
      // console.log("dd:"+player);


      // this.playerDetails.fullName = "prajwal";
      //   this.playerDetails.pid = data["id"];
      //   this.playerDetails.name = data["name"];
      //   this.playerDetails.country=data["country"]
      //   console.log("from playerdetails:"+this.playerDetails.fullName);



      // this.idd=0;
      // data.forEach(element=>{
      //   this.idd++;
      //   // this.playerDetails=new PlayerDetails();


      // })

    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
