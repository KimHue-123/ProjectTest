import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from '../classes/user-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 // private userLogin = new UserLogin();
  //public name = new FormControl('');
  public profileForm = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    //this.UserName.setValue("Do Van Ngheo");
    //this.userLogin.UserName = this.profileForm.controls.UserName;
    console.warn(this.profileForm.value);
    console.log(this.profileForm.controls.UserName.value);
  }


}
