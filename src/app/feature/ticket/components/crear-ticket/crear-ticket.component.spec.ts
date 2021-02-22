import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpService } from '@core/services/http.service';
import { TicketService } from '@ticket/shared/service/ticket.service';

import { CrearTicketComponent } from './crear-ticket.component';

import { of, throwError } from 'rxjs';
import { Notificacion } from '@shared/copmponents/notificacion/model/notificacion';

describe('CrearTicketComponent', () => {
  let component: CrearTicketComponent;
  let fixture: ComponentFixture<CrearTicketComponent>;
  let ticketService: TicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTicketComponent],
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
    fixture = TestBed.createComponent(CrearTicketComponent);
    ticketService = TestBed.inject(TicketService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ser invalido el formulario si esta vacio', () => {
    expect(component.ticketForm.valid).toBeFalsy();
  });

  it('Debería ser valido el formulario si esta diligenciado', () => {
    component.ticketForm.controls.placaVehiculo.setValue('UNA008');
    component.ticketForm.controls.tipoVehiculo.setValue(1);
    expect(component.ticketForm.valid).toBeTruthy();
  });

  it('Debería llamarse el servicio que guarda las solicitudes', () => {
    // Arrange
    const idFake = 1;
    const response = { valor: idFake};
    const spy = spyOn(ticketService, 'guardar').and.returnValue(
      of(response)
    );
    // Act
    component.crearTicket();
    // Assert
    expect(spy).toHaveBeenCalled();
  });


  it('Debería guardar la solicitud y obtenerse el ID de la solicitud', () => {
    // Arrange
    const idFake = 1;
    const response = { valor: idFake };
    spyOn(ticketService, 'guardar').and.returnValue(
      of(response)
    );
    const notificacion = new Notificacion(
      '¡Ticket Creado!',
      `El numero del ticket es: ${idFake}`,
      true);
    // Act
    component.crearTicket();
    // Assert
    expect(component.notificacion).toEqual(notificacion);
  });

  it('Debería fallar el guardado del ticket obtener el mensaje de error', () => {
    // Arrange
    const response = {
      nombreExcepcion: 'ExceptionVehiculoEnParqueoNoPuedeIngresarDuplicado',
      mensaje: 'El vehiculo ya se encuentra dentro del parqueadero'
    };

    const errorWrapper = { error: response };
    spyOn(ticketService, 'guardar').and.callFake(
      () => throwError(errorWrapper)
    );
    const notificacion = new Notificacion(
      'Error :(',
      `${response.mensaje}`,
      false);
    // Act
    component.crearTicket();
    // Assert
    expect(component.notificacion).toEqual(notificacion);
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

});
