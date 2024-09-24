import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeTransactionsServiceService {

  constructor(private http: HttpClient) { }

  getListeTransactions(): Observable<any> {
    return this.http.get('/assets/transactions.json');
  }

  getTransactionDetail(id: number): Observable<any> {
    return this.http.get(`assets/${id}.json`);
  }
}
