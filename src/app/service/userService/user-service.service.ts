import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { IUserLogin } from '../modal/dbdata';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  

  constructor(private httpService:HttpServiceService) { }
  login(reqdata:IUserLogin){

    let httpOption={
      headers : new HttpHeaders({
        'Content-type' : 'application/json'
      })
    }
    return this.httpService.PostService('/user/login', reqdata, false , httpOption)
  }
}
