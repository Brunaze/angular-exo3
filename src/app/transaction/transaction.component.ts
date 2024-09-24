import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListeTransactionsServiceService } from '../liste-transactions-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  transaction: any;

  constructor(private route: ActivatedRoute, private listetransactionservice: ListeTransactionsServiceService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.listetransactionservice.getTransactionDetail(id).subscribe(data => {
      this.transaction = data;
    });

  }
}
