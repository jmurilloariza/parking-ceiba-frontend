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
    component.data = new Notificacion('Titulo', 'Mensaje', true);
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar el titulo de la alerta', () => {
    const element: HTMLElement = fixture.debugElement.query( By.css('h5') ).nativeElement;
    expect( element.innerHTML ).toContain('Titulo');
  });

  it('Debe mostrar el mensaje de la alerta', () => {
    const element: HTMLElement = fixture.debugElement.query( By.css('p') ).nativeElement;
    expect( element.innerHTML ).toContain('Mensaje');
  });

  it('Debe ser una notificación positiva', () => {
    const element: HTMLElement = fixture.debugElement.query( By.css('.alert-success') ).nativeElement;
    expect( element ).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

});
