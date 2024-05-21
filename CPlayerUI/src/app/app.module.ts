import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LoginComponent } from './login/login.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RegisterComponent } from './register/register.component';
import { SearchplayerComponent } from './searchplayer/searchplayer.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//angular material imports---
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { CplayerserviceService } from './cplayerservice.service';
import { AuthGuardService } from './auth-guard.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AfterLoginHeaderComponent } from './after-login-header/after-login-header.component';
import { TeamsComponent } from './teams/teams.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { ChangeuserpasswordComponent } from './changeuserpassword/changeuserpassword.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NotloggedincompComponent } from './notloggedincomp/notloggedincomp.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavouritesComponent,
    LoginComponent,
    PlayerdetailsComponent,
    PlayerlistComponent,
    RecommendedComponent,
    RegisterComponent,
    SearchplayerComponent,
    FooterComponent,
    AfterLoginHeaderComponent,
    TeamsComponent,

    ContactUsComponent,
     AboutusComponent,
     FaqComponent,
     ChangeuserpasswordComponent,
     EdituserComponent,
     NotloggedincompComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule



    // NgbModal

  ],
  providers: [CplayerserviceService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
