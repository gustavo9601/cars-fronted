import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


import {LoginComponent} from "src/app/components/login/login.component";
import {RegisterComponent} from "src/app/components/register/register.component";
import {HomeComponent} from "src/app/components/home/home.component";


const appRoutes: Routes = [

  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'logout/:sure', component: LoginComponent},  //para salir
  {path:'**', component: HomeComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

