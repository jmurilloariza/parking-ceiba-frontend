import { TestBed } from '@angular/core/testing';
import { Notificacion } from '../model/notificacion';
import { NotificacionService } from './notificacion.service';

describe('NotificacionService', () => {
    let service: NotificacionService;
    let notificacion: Notificacion;

    beforeEach(() => {
        // const injector = TestBed.configureTestingModule({
        //   imports: [],
        //   providers: [NotificacionService, HttpService]
        // });
        service = TestBed.inject(NotificacionService);
    });

    it('Debería crear el servicio', () => {
        // Arrange - Act
        const notificacionService: NotificacionService = TestBed.inject(NotificacionService);
        // Assert
        expect(notificacionService).toBeTruthy();
    });

    it('Debería emitir una notificacion', () => {
        notificacion = new Notificacion('', '', false);
        service.emite(notificacion);

        service.escucha().subscribe(msj => {
            console.log(msj);
            
            expect(msj).toEqual(notificacion);
        });
    });

    afterAll(() => {
        TestBed.resetTestingModule();
    });
});
