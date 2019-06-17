import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularWayComponent } from './angular-way/angular-way.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
