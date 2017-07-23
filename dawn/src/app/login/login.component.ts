import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { RegisterComponent } from "app/register/register.component";

export interface LoginModel {
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent extends DialogComponent<LoginModel, boolean> implements OnInit {
  loginCredentails: { emailId: string, password: string } = { emailId: "", password: "" };

  constructor(dialogService: DialogService) {
    super(dialogService);
   }

  ngOnInit() {
  }
  onSignupClick() {
    this.close();
    this.dialogService.addDialog(RegisterComponent);
  }
}
