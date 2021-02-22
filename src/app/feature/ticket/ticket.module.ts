import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TicketRoutingModule } from './ticket-routing.module';

import { CrearTicketComponent } from './components/crear-ticket/crear-ticket.component';
import { ListarTicketComponent } from './components/listar-ticket/listar-ticket.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { BuscarTicketComponent } from './components/buscar-ticket/buscar-ticket.component';

import { TicketService } from './shared/service/ticket.service';

import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    CrearTicketComponent,
    ListarTicketComponent,
    TicketComponent,
    BuscarTicketComponent
  ],
  imports: [
    TicketRoutingModule,
    SharedModule
  ],
  providers: [TicketService, DatePipe]
})
export class TicketModule { }
