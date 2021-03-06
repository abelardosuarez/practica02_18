import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('nav', {static: false}) navRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.navRef.nativeElement.classList.toggle('open');
  }

}
