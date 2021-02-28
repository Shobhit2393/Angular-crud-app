import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ErrorMsg:string='';
  User: User = new User();
  constructor(private router: Router,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  login() {
    debugger;
    if(this.User.userName.trim()==null || this.User.userName.trim()=="")
    {
      this.ErrorMsg="UserName is required";
      return;
    }
    if(this.User.password.trim()==null || this.User.password.trim()=="")
    {
      this.ErrorMsg="Password is required";
      return;
    }
    if (this.User.userName=='blogger@grapecity.com' && this.User.password=='1qaz!QAZ') {
      this.router.navigate(['home/allrecord']);
    }
    else
    {
      this.ErrorMsg="Incorrect credentials";
      return;
    }
  }
    onChange()
    {
      debugger;
      this.ErrorMsg=""; 
    }
}
