import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PivotSBUComponent } from './pivot-sbu/pivot-sbu.component';
import { SummaryAccountComponent } from './summary-account/summary-account.component';
import { SummaryEDPComponent } from './summary-edp/summary-edp.component';
import { HttpClientModule } from '@angular/common/http';
import * as XLSX from 'xlsx';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PivotSBUComponent,
    SummaryAccountComponent,
    SummaryEDPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
