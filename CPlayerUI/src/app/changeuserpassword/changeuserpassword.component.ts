import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CplayerserviceService } from '../cplayerservice.service';
import { User } from '../User';

@Component({
  selector: 'app-changeuserpassword',
  templateUrl: './changeuserpassword.component.html',
  styleUrls: ['./changeuserpassword.component.css']
})
export class ChangeuserpasswordComponent implements OnInit {
  user:User;
  disp_msg;
  user_name;

  constructor(private cplayerService:CplayerserviceService,private router:Router) {
    this.user=new User();
    this.user_name=localStorage.getItem('username')
  }


  ngOnInit(): void {
  }

  updatePassword(){
    // console.log(this.user)
    //  console.log(environment.username+"inupdate")
     this.cplayerService.updatePassword(this.user).subscribe({
       next:(data)=>{this.disp_msg="Congratulatins "+this.user.username+" your password updated successfully";this.cplayerService.logout(); this.router.navigate(["/login"])},
       error:(e)=>{console.log(e);this.disp_msg="Failed to update your pasword"
       ;
       }
     })

}}
