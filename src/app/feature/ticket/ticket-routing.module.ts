import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
