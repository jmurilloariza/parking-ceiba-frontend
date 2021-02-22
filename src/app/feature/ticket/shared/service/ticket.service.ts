import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Ticket } from '../model/ticket';

@Injectable()
export class TicketService {

  constructor(protected http: HttpService) { }

  public guardar(ticket: Ticket) {
    return this.http.doPost<Ticket, boolean>(`${environment.endpoint}/tickets`, ticket,
      this.http.optsName('crear/actualizar tickets'));
  }

  public listar() {
    return this.http.doGet<Ticket[]>(`${environment.endpoint}/tickets`,
      this.http.optsName('Consultar tickets')
    );
  }

}
