// done
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CplayerserviceService } from '../cplayerservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

loggedIn:boolean;
notLogged:boolean;
user_name:any  //taking from environment

  constructor(private cplayerservice:CplayerserviceService,private router: Router) {
    // this.loggedInMethod()
  }

  ngOnInit(): void {
    this.user_name=localStorage.getItem('username')
    this.loggedInMethod()
  }

  logout(){
    console.log("heyy...I am logout")
    // this.cplayerService.logout();
    // this.router.navigate(['/login']);
    this.cplayerservice.logout();
   this.router.navigate(['/login']);

  }

  loggedInMethod(){
    if( this.cplayerservice.isLoggedIn()==true){
    this.loggedIn=true;
     console.log(this.loggedIn);

   }
   else{
     }
    this.notLogged=true;
    console.log(this.notLogged);

   }

}
