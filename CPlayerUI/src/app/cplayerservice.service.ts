import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cplayer } from './cplayer';
import { User } from './User';
const USER_NAME = "";
const tk="";




@Injectable({
  providedIn: 'root'
})
export class CplayerserviceService {
  cplayerApi: String;
  apiKey: String;
  loginEndPoint: string;
  registerEndPoint: string;
  favouritEndPoint: string;
  username: any;  //changed--->
  recommendedEndPoint: string;
  updatepasswordEndPoint:string
  edituserEndPoint:string;
  externalApiEndPoint:string;
  offset:String;
  search:string;
  uName:any;
  pid:String;

 pnameFromkey:String
 pidFromkey:String;


  constructor(private httpClient: HttpClient,  private router: Router) {
    this.cplayerApi = 'https://api.cricapi.com/v1/players_info?';
    this.apiKey = 'apikey=849e9ffc-19cc-4957-8780-d215b4c4f740';

    // Microservices ports-:

    // this.loginEndPoint= 'http://localhost:7071/api/v1/userservice/login';
    // this.registerEndPoint= 'http://localhost:7071/api/v1/userservice/register';
    // this.updatepasswordEndPoint='http://localhost:7071/api/v1/userservice/changepassword';
    // this.edituserEndPoint='http://localhost:7071/api/v1/userservice/update'

    //  this.favouritEndPoint= 'http://localhost:7072/api/v1/favoriteservice';
    //  this.recommendedEndPoint = 'http://localhost:7074/api/v1/playerrecommendationservice';


    // Assigining Gateway ports-
    this.loginEndPoint= 'http://localhost:8991/api/v1/userservice/login';
    this.registerEndPoint= 'http://localhost:8991/api/v1/userservice/register';
    this.updatepasswordEndPoint='http://localhost:8991/api/v1/userservice/changepassword';
    this.edituserEndPoint='http://localhost:8991/api/v1/userservice/update'

    this.favouritEndPoint= 'http://localhost:8991/api/v1/favoriteservice';
    this.recommendedEndPoint = 'http://localhost:8991/api/v1/playerrecommendationservice';
    this.externalApiEndPoint="http://localhost:8991/api/v1/players/player?page=1"


   }



   //To display all players from crickapi
  getAllPlayerList(): Observable<any> {
    // this.cplayerApi = 'https://api.cricapi.com/v1/players?';
    // this.apiKey = 'apikey=849e9ffc-19cc-4957-8780-d215b4c4f740';
    // this.offset='&offset=0'
    //  this.search='&search='
    // const url = `${this.cplayerApi}${this.apiKey}${this.offset}${this.search}`;

      const url="http://localhost:8991/api/v1/players/player?page=1"
      console.log(url);
    return this.httpClient.get(url);
  }

  //To display PlayerDetails in playerdetails component
  getPlayerDetails(pid: String): Observable<any> {
    pid=this.pidFromkey;
    console.log(pid);

     console.log("from service class get PlayerDetails() method")

     this.cplayerApi = 'https://api.cricapi.com/v1/players_info';
     this.apiKey = '?apikey=849e9ffc-19cc-4957-8780-d215b4c4f740&id=' + pid;
     const url = `${this.cplayerApi}${this.apiKey}`;
     console.log(url);
    // const url="http://localhost:8200/api/v1/players/player?page=1"+pid
    return this.httpClient.get(url);

  }


  // To searchplayer----searching player is working now
  getPlayerList(name: String): Observable<any> {
    // name="rahul"
    name=this.pnameFromkey;
    console.log(name);
    this.offset='&offset=0'
    this.cplayerApi = 'https://api.cricapi.com/v1/players';
    this.apiKey = '?apikey=849e9ffc-19cc-4957-8780-d215b4c4f740&offset=0&search=' + name;
    const url = `${this.cplayerApi}${this.apiKey}`;
     console.log(url);
    return this.httpClient.get(url);
  }

   //done---connected to backend
   registerUser(newUser:any) {
    const url = this.registerEndPoint;
    return this.httpClient.post(url, newUser);
  }


  public getToken(User:any){
    console.log("Generating token from servise")
    const url = this.loginEndPoint;
    // localStorage.setItem(this.uName, User.username);
    // console.log("username form token: "+this.uName);
    console.log("username form token: "+User.username);
    localStorage.setItem("username",User.username);
    console.log(this.username);
    // let x=localStorage.getItem(this.username);
    // console.log(x);
    environment.USER_NAME=User.username
    // environment.username=User.username;
    // console.log("env--"+environment.username);
    console.log(environment.USER_NAME+" -from eni")
    localStorage.setItem(USER_NAME,User.username)
    let y=localStorage.getItem(USER_NAME)
    console.log("y--"+y);

    // console.log("username form token: ");
    // localStorage.setItem('currentUser', JSON.stringify({ token: "jwt will come later", username: User.username }));
    console.log(url);
    return this.httpClient.post(url,User)

  }


  //Setting token in local storage--
  loginUser(token,newUser) {
    // const url = this.loginEndPoint;
    // return this.httpClient.post(url, newUser)
    localStorage.setItem('token',token);
    sessionStorage.setItem(USER_NAME, newUser.username);
    console.log(token);
    return true;
  }


  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    let UserName=localStorage.getItem(USER_NAME);
    let username=localStorage.getItem(USER_NAME);
    console.log(UserName);
    if(UserName!=null){
      return false;
    }
    else{
      return true;
    }

  }

  //set userdetails
  public setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem(USER_NAME,user.username);
  }

  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }




  addPlayerToFavoriteList(cplayer: Cplayer) {
    console.log("Calling addPlayerToFavourite from service class");
    this.username = localStorage.getItem(USER_NAME);
    console.log(this.username);
    if(this.username==null){
      const url = "";
    return this.httpClient.post(url, cplayer)
    }
    else{
      const url = this.favouritEndPoint + "/user/" + this.username + "/player";
    return this.httpClient.post(url, cplayer)

    }


  }

  deletePlayerFromFavouriteList(cplayer:Cplayer){
    console.log("Calling deletePlayerfromFavouritelist from service class");
    this.username=localStorage.getItem(USER_NAME);
    this.pid=cplayer.pid;
    const url = this.favouritEndPoint + "/user/" + this.username +"/"+this.pid;
    console.log("delete url:-"+url);
    return this.httpClient.delete(url)

  }


  addPlayerToRecommendedList(cplayer: Cplayer) {
    console.log("Calling addPlayerToRecommendedList from service class");
    this.username = localStorage.getItem(USER_NAME);
    console.log(this.username);
    if(this.username==null){
      const url = "";
    return this.httpClient.post(url, cplayer)
    }
    else{
      const url = this.recommendedEndPoint + "/user/" + this.username + "/player";
    return this.httpClient.post(url, cplayer)
    }



  }
  deletePlayerFromRecommendedList(cplayer:Cplayer){
    // this.cplayerservice.de
    console.log("Calling deletePlayerfromRecommendedList from service class");
    this.username=localStorage.getItem(USER_NAME)
    this.pid=cplayer.pid
    const url = this.recommendedEndPoint + "/user/" + this.username +"/"+this.pid;
    console.log("recommended delete-:"+url);
    return this.httpClient.delete(url)

  }

  getFavoriteList(): Observable<Cplayer[]> {
    console.log("getFavourite from service class");
    this.username = localStorage.getItem(USER_NAME);
    const url = this.favouritEndPoint + "/user/" + this.username + "/player";
    return this.httpClient.get<Cplayer[]>(url);

  }

  getRecommendedList(): Observable<Cplayer[]> {
    console.log("recommended from service class");
    this.username = localStorage.getItem(USER_NAME);
    const url = this.recommendedEndPoint + "/user/" + this.username + "/player";
    console.log(url);
    return this.httpClient.get<Cplayer[]>(url);
  }

  //To remove token from localstorage
  logout() {
    sessionStorage.removeItem(this.username);
    sessionStorage.clear();
    localStorage.removeItem(USER_NAME)
    localStorage.removeItem('token');
    localStorage.clear();
    // console.log("Log out:"+USER_NAME);
    console.log("logged out from cplayercervice");
  }


  updatePassword(user:User){
    // console.log(username+"in service updatepassword")
    console.log(user.oldpassword+"inservice  updatepassword"+ user.newpassword)
    const url =this.updatepasswordEndPoint+'/'+localStorage.getItem(USER_NAME)
    console.log(url)
     return this.httpClient.put(url,user)
  }

  changedetails(user:User){
    // console.log(oldusername+"in service changedetails")
    console.log(user.username+"inservice  changedetails")
    const url =this.edituserEndPoint+'/'+localStorage.getItem(USER_NAME)
    console.log(url)
     return this.httpClient.put(url,user)
  }






}


