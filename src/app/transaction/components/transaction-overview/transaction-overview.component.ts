import { Component, OnInit } from '@angular/core';
import { Transaction } from '@Types/transaction/transaction';
import { Observable } from 'rxjs';
import { TransactionService } from '../../transaction.service';

@Component({
    selector: 'app-transaction-overview',
    templateUrl: './transaction-overview.component.html',
    styleUrls: ['./transaction-overview.component.scss'],
})
export class TransactionOverviewComponent implements OnInit {
    transactions: Observable<Transaction[]>;
    constructor(private transactionService: TransactionService) {
        this.transactions = this.transactionService.getTransactions();
    }

    ngOnInit(): void {}
}
