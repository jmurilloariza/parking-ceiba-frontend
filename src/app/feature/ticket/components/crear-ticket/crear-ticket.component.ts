import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Model
import { Notificacion } from '@shared/copmponents/notificacion/model/notificacion';
import { NotificacionService } from '@shared/copmponents/notificacion/service/notificacion.service';
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
  templateUrl: './crear-ticket.component.html'
})
export class CrearTicketComponent implements OnInit {

  seleccionado: string;
  tipos: Tipo[];
  ticketForm: FormGroup;
  notificacion: Notificacion;

  constructor(private ticketService: TicketService, private notificacionService: NotificacionService) {
    this.tipos = [
      { id: 1, nombre: 'Automovil' },
      { id: 2, nombre: 'Motocicleta' }
    ];
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

  crearTicket(): void {
    this.ticketService.guardar(this.ticketForm.value)
      .subscribe(
        success => {
          const key = 'valor';
          const valor = success[key];
          this.notificacion = new Notificacion('¡Ticket Creado!', `El numero del ticket es: ${valor}`, true);
          this.notificacionService.emite(this.notificacion);
        },
        error => {
          this.notificacion = new Notificacion('Error :(', `${error.error.mensaje}`, false);
          this.notificacionService.emite(this.notificacion);
        }
      );
    this.ticketForm.reset();
  }
}
