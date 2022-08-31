import { ViewportScroller } from '@angular/common';
import { Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.pageYoffset = window.pageYOffset;
  }
  routActive:string;
  choose = false;

  constructor(private router: Router,
    private scroll: ViewportScroller) { }

  toRoute(event: string) {
    this.routActive = event;
    console.log('this.routActive', this.routActive)
    this.router.navigate([event]);
  }

  bottomScrollFunction() {
    this.scroll.scrollToPosition([0, 500]);
  }

  close() {
    this.choose = false
  }

  open() {
    this.choose = true
  }
}