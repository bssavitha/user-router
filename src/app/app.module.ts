import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_ROOT } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { UserComponent } from './container/user/user.component';
import { EmployeeComponent } from './container/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    UserComponent,
    EmployeeComponent
  ],
  const appRoutes:Routes[
    { }
  ]
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
