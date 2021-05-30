import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FetchService} from '../services/fetch.service';
import { LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  tokenKey: string = "wr_token";
  constructor(private loginService: LoginService,
  private formBuilder: FormBuilder,
  private router: Router,
  private fetchService: FetchService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group( {
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(form:any){
    const obj = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    const isAuthenticated = this.loginService.validate(obj);
    if(isAuthenticated){
      this.fetchService.getData().subscribe(data => {
        localStorage.setItem(this.tokenKey, JSON.stringify(data));
        this.router.navigateByUrl('home');
      });
    }else{
      console.log('Login Failed');
    }
  }

}
