import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule }from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogtwoComponent } from './dialogtwo/dialogtwo.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatCardModule, BrowserAnimationsModule, MatDialogModule, MatToolbarModule,
  AppRoutingModule, MatSidenavModule, MatIconModule, MatFormFieldModule,ReactiveFormsModule
  ],
  declarations: [AppComponent ,HelloComponent, DialogComponent,  DialogtwoComponent, EmployeeComponent, DepartmentComponent ],
  entryComponents:[DialogComponent],
  bootstrap:    [ AppComponent ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
