import { Component, OnInit } from '@angular/core';
import { Ticket } from '@ticket/shared/model/ticket';
import { TicketService } from '@ticket/shared/service/ticket.service';

@Component({
  selector: 'app-listar-ticket',
  templateUrl: './listar-ticket.component.html',
  styleUrls: ['./listar-ticket.component.css']
})
export class ListarTicketComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.listarTickets();
  }

  listarTickets(): void {
    this.ticketService.listar().subscribe(
      response => {
        this.tickets = response
        console.log(response);
      });
  }

}
