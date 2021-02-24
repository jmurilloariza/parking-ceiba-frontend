import { Component, OnInit } from '@angular/core';
import { Notificacion } from './model/notificacion';
import { NotificacionService } from './service/notificacion.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html'
})
export class NotificacionComponent implements OnInit {

  notificacion: Notificacion;
  classHide: string;
  classTipoAlerta: string;

  constructor(private notificacionService: NotificacionService) { }

  ngOnInit(): void {
    this.escucharNotificaciones();
  }

  private escucharNotificaciones() {
    this.notificacionService.escucha().subscribe(msj => {
      this.notificacion = msj;

      msj.status ? this.classTipoAlerta = 'alert-success'
        : this.classTipoAlerta = 'alert-danger'

      msj.message == '' && msj.title == '' ? this.classHide = 'd-none'
        : this.classHide = '';
    });
  }

  public cerrarNotificacion() {
    this.classHide = 'd-none';
  }

}
