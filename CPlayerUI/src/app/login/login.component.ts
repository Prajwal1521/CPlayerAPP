// done
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of } from 'rxjs';
import { CplayerserviceService } from '../cplayerservice.service';
import { User } from '../User';
export const TOKEN_NAME = "token";
const tk="tk";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  dataa:any;




  constructor(private cplayerService: CplayerserviceService,private router: Router) {
    this.user=new User();
   }



  ngOnInit(): void {
  }


  disp_msg:string;

  login() {
    console.log("User----->"+this.user.username);
    this.cplayerService.getToken(this.user).subscribe(
      (data=>{
        this.dataa=data;
        console.log(this.dataa);
        localStorage.setItem(TOKEN_NAME, data['token']);
        console.log("updated-->"+TOKEN_NAME);

      console.log("token is:"+data['token']) ;
      console.log("Login Successfull!");
      localStorage.setItem(tk,data['token']);
      console.log("tk--->"+tk);

      // delay(6000)

    this.router.navigate(["/findplayer"]);
      //  this.router.navigate(['/header'])
      }),
      (error=>{console.log("Error!--Token not generated because of Invalid credentials");
      this.disp_msg="Login Failed! Please provide correct username and password";
      })

    )
    // this.cplayerService.
  }

}
