import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'about-us', component: AboutUsComponent,
  },
  {
    path: 'what-we-do', component: WhatWeDoComponent,
  },
  {
    path: 'contact-us', component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
