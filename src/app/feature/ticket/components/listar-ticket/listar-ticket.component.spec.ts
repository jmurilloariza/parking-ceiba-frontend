import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Ticket } from '@ticket/shared/model/ticket';
import { TicketService } from '@ticket/shared/service/ticket.service';

import { ListarTicketComponent } from './listar-ticket.component';

import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ListarTicketComponent', () => {
  let component: ListarTicketComponent;
  let fixture: ComponentFixture<ListarTicketComponent>;
  let ticketService: TicketService;
  const tickets: Ticket[] = [
    new Ticket('1', 'UNA008', '1', '2020-12-12 23:32:22', '', 150000),
    new Ticket('1', 'UHN094', '1', '2020-12-12 23:32:22', '', 300000)
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTicketComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        TicketService, HttpService
      ]
    });
    fixture = TestBed.createComponent(ListarTicketComponent);
    ticketService = TestBed.inject(TicketService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería llamarse el servicio que lista los tickets', () => {
    // Arrange
    const spy = spyOn(ticketService, 'listar').and.returnValue(
      of([])
    );
    // Act
    component.ngOnInit();
    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('Debería listar correctamente los tickets desde el servicio', () => {
    // Arrange
    spyOn(ticketService, 'listar').and.returnValue(
      of(tickets)
    );
    // Act
    component.ngOnInit();
    // Assert
    expect(component.tickets).toBe(tickets);
  });

  it('Debería mostrarse un mensaje indicando que no hay tickets', async () => {
    // Arrange
    spyOn(ticketService, 'listar').and.returnValue(
      of([])
    );
    // Act
    component.ngOnInit();
    // Assert
    const element: HTMLElement = fixture.debugElement.query(By.css('.alert')).nativeElement;
    expect(element.innerHTML).toContain('¡No hay tickets registrados en el sistema!');
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
