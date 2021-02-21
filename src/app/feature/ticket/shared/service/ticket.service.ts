import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Ticket } from '@ticket/shared/model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private URL_TICKET: string;

  constructor(protected http: HttpService) {
    this.URL_TICKET = '/tickets';
  }

  public guardar(ticket: Ticket): any {
    return this.http.doPost<Ticket, boolean>(`${environment.endpoint}${this.URL_TICKET}`, ticket,
      this.http.optsName('crear/actualizar tickets'));
  }

  public listar(): any {
    return this.http.doGet<Ticket[]>(`${environment.endpoint}${this.URL_TICKET}`,
      this.http.optsName('Consultar tickets')
    );
  }

}
