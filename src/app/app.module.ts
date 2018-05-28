import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { UserComponent } from './container/user/user.component';
import { EmployeeComponent } from './container/employee/employee.component';


const appRoutes :Routes=[
  {
    path:'user', component:UserComponent, data:{ title:'welcome to user'}
  },
  {
    path:'employee', component:EmployeeComponent, data:{ title:'welcome to employee'}
  },
  {
    path:'', redirectTo:'/user',pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    UserComponent,
    EmployeeComponent
  ],
  

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
