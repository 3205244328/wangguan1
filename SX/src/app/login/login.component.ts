import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  baseUrl = 'http://192.168.43.151:3000/';
  name$: Observable<string>;

  constructor(private fb: FormBuilder, private router: Router, private httpClient: HttpClient, private authService: AuthService) { }

  login() {
    //this.router.navigate(['/manage']);
    const swt = { "userName": this.userName, "password": this.password }
    console.log(swt);
    this.httpClient.post(this.baseUrl + 'login', swt).subscribe(
      (val: any) => {
        if (val.succ) {
          this.authService.login();
          this.router.navigate(['/manage']);
        } else {
          //this.authService.logout();
          alert("登录失败");
        }
      }
    );
  }

}
