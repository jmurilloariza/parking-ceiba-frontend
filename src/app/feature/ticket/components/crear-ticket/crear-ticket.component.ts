import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Model
import { Ticket } from '@ticket/shared/model/ticket';
import { Notificacion } from '@shared/copmponents/notificacion/model/notificacion';
// Service
import { TicketService } from '@ticket/shared/service/ticket.service';

interface Tipo {
  id: number;
  nombre: string;
}

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 8;

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {

  seleccionado: string;
  tipos: Tipo[];
  ticketForm: FormGroup;
  notificacion: Notificacion;

  constructor(private ticketService: TicketService) {
    this.tipos = [
      { id: 1, nombre: "Automovil" },
      { id: 2, nombre: "Motocicleta" },
    ]
  }

  ngOnInit(): void {
    this.construirFormulario();
  }

  private construirFormulario(): void {
    this.ticketForm = new FormGroup({
      placaVehiculo: new FormControl('', [
        Validators.required, 
        Validators.min(LONGITUD_MINIMA_PERMITIDA_TEXTO), 
        Validators.max(LONGITUD_MAXIMA_PERMITIDA_TEXTO)
      ]),
      tipoVehiculo: new FormControl('', [Validators.required])
    });
  }

  private construirTicket(): Ticket {
    const ticket: Ticket  = this.ticketForm.value;
    return ticket;
  }

  crearTicket(): void {
    this.ticketService.guardar(this.construirTicket())
    .subscribe(
      success => {
        this.notificacion = new Notificacion ('¡Ticket Creado!',
         `El numero del ticket es: ${success['valor']}`, true);
      },
      error => {
        this.notificacion = new Notificacion ('Error :(', `${error.error.mensaje}`, false);
      }
    );
    this.ticketForm.reset();
  }
}
