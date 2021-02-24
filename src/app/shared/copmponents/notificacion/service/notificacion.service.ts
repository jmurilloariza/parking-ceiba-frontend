import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; // Tenemos que importar los observables de la librería RxJS
import { Notificacion } from '../model/notificacion';

@Injectable({
    providedIn: 'root' // Así se establece a partir de Angular 6 el ámbito de la instancia del servicio
})
export class NotificacionService {
    private mensajero: BehaviorSubject<Notificacion> = new BehaviorSubject({
        title: '',
        message: '',
        status: false
    });

    constructor() { }

    // Método público para quien se quiera suscribir a los mensajes
    public escucha(): Observable<Notificacion> {
        return this.mensajero.asObservable();
    }

    // Método público para quien quiera emitir un mensaje
    public emite(msj: Notificacion): void {
        this.mensajero.next(msj);
    }

}
