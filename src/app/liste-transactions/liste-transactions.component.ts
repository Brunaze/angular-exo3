import { Component } from '@angular/core';
import { ListeTransactionsServiceService } from '../liste-transactions-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-transactions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liste-transactions.component.html',
  styleUrl: './liste-transactions.component.css'
})
export class ListeTransactionsComponent {

  transactions: any[] = [];
  sortedColumn: string = '';
  isAscending: boolean = true;

  constructor(private listetransactionservice: ListeTransactionsServiceService, private router: Router) {}

  ngOnInit() {
    this.listetransactionservice.getListeTransactions().subscribe(data => {
      this.transactions = data;
    })
  }

  sort(column: string): void {
    this.isAscending = this.sortedColumn === column ? !this.isAscending : true;
    this.sortedColumn = column;

    this.transactions.sort((a, b) => {
      if (a[column] < b[column]) return this.isAscending ? -1 : 1;
      if (a[column] > b[column]) return this.isAscending ? 1 : -1;
      return 0;
    });
  }

}
