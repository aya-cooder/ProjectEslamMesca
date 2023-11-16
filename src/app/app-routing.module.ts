import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './compontent/login/login.component';
import { RegisterComponent } from './compontent/register/register.component';
import { HomeComponent } from './compontent/home/home.component';
import{NavbarComponent} from'./compontent/navbar/navbar.component';
import { ListsComponent } from './compontent/lists/lists.component';






const routes: Routes=[
  {
    path:'login',
    component:LoginComponent

},
{
  path:'register',
  component:RegisterComponent

},
{
  path:'home',
  component:HomeComponent

},
{
  path:'home',
  component:HomeComponent

},
{
path:'navbar',
component:NavbarComponent
},
{
  path:'lists',
  component:ListsComponent
  },


{
  path:'',redirectTo:'home',pathMatch:'full'
},

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

