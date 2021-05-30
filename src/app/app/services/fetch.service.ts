import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://randomuser.me/api/0.8/?results=20');
  }
}
