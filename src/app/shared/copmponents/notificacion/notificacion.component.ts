import { Component, Input, OnInit } from '@angular/core';
import { Notificacion } from './model/notificacion';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html'
})
export class NotificacionComponent implements OnInit {

  @Input()
  data: Notificacion;

  constructor() { }

  ngOnInit(): void {
  }

}
