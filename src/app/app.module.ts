import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
//Importando router
import{routing, appRoutingProviders} from "src/app/app.routing";

//Importando servicio
import {UserService} from "src/app/services/user.service";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    //Modulos
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    //Servicio de las rutas
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
