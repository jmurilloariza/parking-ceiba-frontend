import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Ticket } from '../model/ticket';

import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let httpMock: HttpTestingController;
  let service: TicketService;
  const ENDPOINT = `${environment.endpoint}/tickets`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TicketService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(TicketService);
  });

  it('Debería crear el servicio', () => {
    // Arrange - Act
    const ticketService: TicketService = TestBed.inject(TicketService);
    // Assert
    expect(ticketService).toBeTruthy();
  });

  it('Deberia crear un ticket', () => {
    // Arrange
    const dummyTicket = new Ticket('1', 'UNA008', '1', '2020-12-12 23:32:22', '', 150000);
    const dummyResponse = { valor: 1 };
    // Act
    service.guardar(dummyTicket).subscribe((success) => {
      // Assert
      expect(success).toEqual(dummyResponse);
    });
    const request = httpMock.expectOne(ENDPOINT);
    // Assert
    expect(request.request.method).toBe('POST');
    expect(request.request.responseType).toBe('json');
    request.event(new HttpResponse<any>({ body: dummyResponse }));
  });

  it('Deberia pagar un ticket', () => {
    // Arrange
    const dummyTicket = new Ticket('1', '', '', '', '', 0);
    const dummyResponse = { valor: 1600 };
    // Act
    service.pagarTicket(dummyTicket).subscribe((success) => {
      // Assert
      expect(success).toEqual(dummyResponse);
    });
    const request = httpMock.expectOne(`${ENDPOINT}/pagar/${dummyTicket.id}`);
    // Assert
    expect(request.request.method).toBe('POST');
    expect(request.request.responseType).toBe('json');
    request.event(new HttpResponse<any>({ body: dummyResponse }));
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
