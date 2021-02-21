import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTicketComponent } from './buscar-ticket.component';

describe('BuscarTicketComponent', () => {
  let component: BuscarTicketComponent;
  let fixture: ComponentFixture<BuscarTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
