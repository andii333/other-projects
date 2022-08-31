import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  
  form:FormGroup;
  pageYoffset = 0;

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[+()0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    alert('The information of this message is in localStorage and is displayed in the console');
    console.log('this.form.value', this.form.value);
    let messages = [];
    if (localStorage.getItem('messages')) {
      messages = JSON.parse(localStorage.getItem('messages'))};
messages.push(this.form.value);
    localStorage.setItem('messages', JSON.stringify(messages));
    this.form.reset()
  }
  
  upScrollFunction() {
    this.scroll.scrollToPosition([0, 0]);
  }

}
