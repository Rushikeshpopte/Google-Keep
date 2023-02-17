import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  BaseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api'

  PostService(url: string, reqdata:any, token:boolean,httpOption:any){
    return this.httpClient.post(this.BaseUrl + url,reqdata,token && httpOption)

  }
  GetService(url: string, reqdata:any, token:boolean,httpOption:any){
    return this.httpClient.get(this.BaseUrl + url,reqdata)
}
PutService(url: string, reqdata:any, token:boolean,httpOption:any){
  return this.httpClient.put(this.BaseUrl + url,reqdata,token && httpOption)
}

  DeletService(url: string, reqdata:any, token:boolean,httpOption:any){
    return this.httpClient.delete(this.BaseUrl + url,reqdata)

  }
}
