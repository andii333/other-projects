import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    GeneralComponent,
    HomeComponent,
    AboutUsComponent,
    WhatWeDoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ContactUsModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  exports: [
    CommonModule,
    GeneralComponent,
    HomeComponent,
    AboutUsComponent,
    WhatWeDoComponent,
    AppRoutingModule,
    ContactUsModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
})
export class GeneralModule { }
