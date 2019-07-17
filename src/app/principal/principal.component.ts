import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @ViewChild('menu', { static: true }) menu: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
    this.showHideMenu();
  }

  showHideMenu() {
    if (this.menu.nativeElement.classList.contains('show')) {
      this.menu.nativeElement.classList.toggle('show');

    }
  }
  

}
