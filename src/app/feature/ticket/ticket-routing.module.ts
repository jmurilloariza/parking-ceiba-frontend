import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarTicketComponent } from './components/buscar-ticket/buscar-ticket.component';
import { CrearTicketComponent } from './components/crear-ticket/crear-ticket.component';
import { ListarTicketComponent } from './components/listar-ticket/listar-ticket.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketComponent,
    children: [
      {
        path: 'crear',
        component: CrearTicketComponent
      },
      {
        path: 'listar',
        component: ListarTicketComponent
      },
      {
        path: 'pagar',
        component: BuscarTicketComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
