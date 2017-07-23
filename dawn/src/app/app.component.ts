import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogService:DialogService) {

  }

  //method to be called to click on login link
  onLoginClick() {
    this.dialogService.addDialog(LoginComponent);
  }
}
