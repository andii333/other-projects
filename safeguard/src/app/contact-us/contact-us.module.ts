import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ContactUsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactUsComponent,
    CommonModule,
    ReactiveFormsModule
  ]
 
})
export class ContactUsModule { }
