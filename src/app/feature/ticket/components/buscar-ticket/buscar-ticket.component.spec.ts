import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Notificacion } from '@shared/copmponents/notificacion/model/notificacion';
import { TicketService } from '@ticket/shared/service/ticket.service';
import { of, throwError } from 'rxjs';

import { BuscarTicketComponent } from './buscar-ticket.component';

describe('BuscarTicketComponent', () => {
  let component: BuscarTicketComponent;
  let fixture: ComponentFixture<BuscarTicketComponent>;
  let ticketService: TicketService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarTicketComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        TicketService, HttpService
      ]
    });
    fixture = TestBed.createComponent(BuscarTicketComponent);
    ticketService = TestBed.inject(TicketService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ser invalido el formulario si esta vacio', () => {
    expect(component.ticketForm.valid).toBeFalsy();
  });

  it('Debería ser valido el formulario si esta diligenciado', () => {
    component.ticketForm.controls.id.setValue(1);
    expect(component.ticketForm.valid).toBeTruthy();
  });

  it('Debería realizar el pago de un ticket y mostar una notificación de cuanto debe pagar', () => {
    // Arrange
    // Arrange
    const idFake = 1;
    const response = { valor: idFake };
    spyOn(ticketService, 'pagarTicket').and.returnValue(
      of(response)
    );
    const notificacion = new Notificacion(
      '¡Ticket pagado!',
      `Debe cobrar: ${response.valor}`,
      true
    );
    // Act
    component.pagarTicket();
    // Assert
    expect(component.notificacion).toEqual(notificacion);
  });

  it('Debería fallar al pagar un ticket que no existe obtener el mensaje de error', () => {
    // Arrange
    const response = {
      nombreExcepcion: 'ExceptionRecursoNoEncontrado',
      mensaje: 'Ticket no encontrado'
    };

    const errorWrapper = { error: response };
    spyOn(ticketService, 'pagarTicket').and.callFake(
      () => throwError(errorWrapper)
    );
    const notificacion = new Notificacion(
      'Error :(',
      `Ticket no encontrado`,
      false);
    // Act
    component.pagarTicket();
    // Assert
    expect(component.notificacion).toEqual(notificacion);
  });

});
