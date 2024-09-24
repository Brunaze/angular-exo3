import { Routes } from '@angular/router';
import {ListeTransactionsComponent} from './liste-transactions/liste-transactions.component';
import {TransactionComponent} from './transaction/transaction.component';

export const routes: Routes = [
    {
        path: '',
        component: ListeTransactionsComponent,
      },
      {
        path: 'transaction/:id',
        component: TransactionComponent,
      },
];
