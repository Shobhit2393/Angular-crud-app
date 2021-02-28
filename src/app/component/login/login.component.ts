import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ErrorMsg:string='';
  User: User = new User();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.User.userName=='blogger@grapecity.com' && this.User.password=='1qaz!QAZ') {
      this.router.navigate(['home/allrecord']);
    }
  }
}
