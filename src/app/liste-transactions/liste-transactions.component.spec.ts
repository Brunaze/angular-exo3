import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTransactionsComponent } from './liste-transactions.component';

describe('ListeTransactionsComponent', () => {
  let component: ListeTransactionsComponent;
  let fixture: ComponentFixture<ListeTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
