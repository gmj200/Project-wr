import { Injectable } from '@angular/core';
import  jsonData  from '../data/loginCredentials.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validate(inputdata: {username:string; password:string}){
    let flag = false;
    for(const obj of jsonData){
      if(obj.username == inputdata.username && obj.password == inputdata.password){
        flag = true;
      }
    }
    return flag;
  }
}
