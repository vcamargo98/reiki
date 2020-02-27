import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../service/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @ViewChild('menu', { static: true }) menu: ElementRef;


  constructor(public _MessageService: MessageService) { }

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

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      
      Swal.fire({
        title:'Enviado!',
        text:'E-mail enviado com sucesso!',
        type:'success',
        showConfirmButton: false,
        timer: 3000
      });

    });
  }
  

}
