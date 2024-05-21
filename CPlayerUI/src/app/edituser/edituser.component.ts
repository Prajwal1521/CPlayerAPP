import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CplayerserviceService } from '../cplayerservice.service';
import { User } from '../User';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user:User;
  disp_msg;
  user_name;
  constructor(private cplayerService:CplayerserviceService,private router:Router) {
    this.user=new User();
    this.user_name=localStorage.getItem('username');
   }

  ngOnInit(): void {
  }


  changedetails(){
    console.log(this.user)
    // console.log(environment.username+"inedit")
    this.cplayerService.changedetails(this.user).subscribe({
      next:(data)=>{this.disp_msg="Congratulatins "+this.user.username+" your details changed successfully";this.logout()
      //this.router.navigate(["/header"])
    },
      error:(e)=>{console.log(e);this.disp_msg="Failed to change your account details"
      ;
      }
    })
  }
  logout(){
    console.log("heyy...I am logout")
    this.cplayerService.logout();
   this.router.navigate(['/login']);

  }

}
