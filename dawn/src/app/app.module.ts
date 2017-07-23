// Core dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//ng2-bootstrap-modal 
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

//custom components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
        LoginComponent,
        RegisterComponent
  ]})
export class AppModule { }
