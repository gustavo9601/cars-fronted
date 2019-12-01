import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


import {LoginComponent} from "src/app/components/login/login.component";
import {RegisterComponent} from "src/app/components/register/register.component";
import {HomeComponent} from "src/app/components/home/home.component";
import {CarNewComponent} from "src/app/components/car-new/car-new.component";
import {CarEditComponent} from "src/app/components/car-edit/car-edit.component";
import {CarDetailComponent} from "src/app/components/car-detail/car-detail.component";


const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout/:sure', component: LoginComponent},  //para salir
  {path: 'create-car', component: CarNewComponent},
  {path: 'edit-car/:id', component: CarEditComponent},
  {path: 'car/:id', component: CarDetailComponent},
  {path: '**', component: HomeComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

