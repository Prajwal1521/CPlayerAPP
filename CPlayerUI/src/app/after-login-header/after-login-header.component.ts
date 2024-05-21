import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CplayerserviceService } from '../cplayerservice.service';

@Component({
  selector: 'app-after-login-header',
  templateUrl: './after-login-header.component.html',
  styleUrls: ['./after-login-header.component.css']
})
export class AfterLoginHeaderComponent implements OnInit {

  constructor(private cplayerservice:CplayerserviceService,private router: Router) {
    // this.loggedInMethod()
  }
  ngOnInit(): void {
  }
  logout(){
    console.log("heyy...I am logout")
    // this.cplayerService.logout();
    // this.router.navigate(['/login']);
    this.cplayerservice.logout();
   this.router.navigate(['/login']);

  }

}
