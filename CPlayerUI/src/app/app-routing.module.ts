import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AfterLoginHeaderComponent } from './after-login-header/after-login-header.component';
import { AuthGuardService } from './auth-guard.service';
import { ChangeuserpasswordComponent } from './changeuserpassword/changeuserpassword.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FaqComponent } from './faq/faq.component';

// import { AuthGuardService } from './auth-guard.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RegisterComponent } from './register/register.component';
import { SearchplayerComponent } from './searchplayer/searchplayer.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path:"findplayer",component:SearchplayerComponent
  },

  {
    path: "details",
    component: PlayerdetailsComponent //header2
  },

   {
    path: "recommended",
    component: RecommendedComponent
  },

  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent

  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "favorite",
    component: FavouritesComponent,

  },

  {
    path: "recommended",
    component: RecommendedComponent
  },

  {
    path: "teams",
    component: TeamsComponent
  },
  {
    path: "contact",
    component: ContactUsComponent
  },
  {
    path: "about",
    component: AboutusComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "changepassword",
    component: ChangeuserpasswordComponent
  },

  {
    path: "edit",
    component: EdituserComponent //header2
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
