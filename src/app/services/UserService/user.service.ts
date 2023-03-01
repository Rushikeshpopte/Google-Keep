import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { Icreatenote, Iregistration, IUserLogin } from '../modal/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private httpService:HttpService) { 
    this.token =localStorage.getItem('token')
  }
  login(reqdata:IUserLogin){

    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'authorization': this.token,
      })
    }
    console.log('data success', reqdata)
    return this.httpService.PostService('user/login' , reqdata, false, httpOption )

  }
  
  registration(signUpdata:Iregistration){
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'authorization': this.token,
      })
    }
    console.log("data success", signUpdata)
    return this.httpService.PostService('user/userSignup', signUpdata, false, httpOption)
  }


  }



