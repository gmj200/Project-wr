import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list:any;
  tokenKey: string = 'wr_token';
  constructor() { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem(this.tokenKey));
    this.list = data.results;
    console.log(this.list);
  }

}
