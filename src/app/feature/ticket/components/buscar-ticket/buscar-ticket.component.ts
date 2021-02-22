import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notificacion } from '@shared/copmponents/notificacion/model/notificacion';

@Component({
  selector: 'app-buscar-ticket',
  templateUrl: './buscar-ticket.component.html',
  styleUrls: ['./buscar-ticket.component.css']
})
export class BuscarTicketComponent implements OnInit {

  ticketForm: FormGroup;
  notificacion: Notificacion;

  constructor() { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  private construirFormulario(): void {
    this.ticketForm = new FormGroup({
      id: new FormControl('', [Validators.required ])
    });
  }

}
