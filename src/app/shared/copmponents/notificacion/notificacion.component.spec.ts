import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Notificacion } from './model/notificacion';
import { NotificacionComponent } from './notificacion.component';

describe('NotificacionComponent', () => {
  let component: NotificacionComponent;
  let fixture: ComponentFixture<NotificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionComponent ]
    });
    fixture = TestBed.createComponent(NotificacionComponent);
    component = fixture.componentInstance;
    component.notificacion = new Notificacion('', '', false);
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar el titulo de la alerta', () => {
    const element: HTMLElement = fixture.debugElement.query( By.css('h5') ).nativeElement;
    expect( element.innerHTML ).toEqual('');
  });

  it('Debe mostrar el mensaje de la alerta', () => {
    const element: HTMLElement = fixture.debugElement.query( By.css('p') ).nativeElement;
    expect( element.innerHTML ).toEqual('');
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

});
