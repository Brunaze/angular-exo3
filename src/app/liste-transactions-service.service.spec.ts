import { TestBed } from '@angular/core/testing';

import { ListeTransactionsServiceService } from './liste-transactions-service.service';

describe('ListeTransactionsServiceService', () => {
  let service: ListeTransactionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeTransactionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
