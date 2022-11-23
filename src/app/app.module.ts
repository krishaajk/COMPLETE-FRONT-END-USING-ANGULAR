import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { Add2cartComponent } from './add2cart/add2cart.component';
import {Component} from '@angular/core';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes = [
  {path:'Loginpage',component:OneComponent},
  {path:'Date',component:TwoComponent},
  {path:'AddtoCart',component:Add2cartComponent},
  {path:'loginpage',component:LoginComponent}
 
];

@NgModule({
  declarations:[
    AppComponent,
    OneComponent,
    TwoComponent,
    Add2cartComponent,
    LoginComponent,
    
    
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    RouterModule.forRoot(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class FormFieldOverviewExample {}