import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notificacion } from '@shared/copmponents/notificacion/model/notificacion';
import { TicketService } from '@ticket/shared/service/ticket.service';

@Component({
  selector: 'app-buscar-ticket',
  templateUrl: './buscar-ticket.component.html'
})
export class BuscarTicketComponent implements OnInit {

  ticketForm: FormGroup;
  notificacion: Notificacion;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  private construirFormulario(): void {
    this.ticketForm = new FormGroup({
      id: new FormControl('', [Validators.required])
    });
  }

  public pagarTicket() {
    this.ticketService.pagarTicket(this.ticketForm.value)
      .subscribe(
        success => {
          const key = 'valor';
          const valor = success[key];
          this.notificacion = new Notificacion('¡Ticket pagado!',
            `Debe cobrar: ${valor}`, true);
        },
        error => {
          this.notificacion = new Notificacion('Error :(', `${error.error.mensaje}`, false);
        }
      );
    this.ticketForm.reset();
  }

}
