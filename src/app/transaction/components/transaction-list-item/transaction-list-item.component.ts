import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Transaction } from '@Types/transaction/transaction';
import { TransactionService } from '../../transaction.service';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    selector: 'app-transaction-list-item',
    templateUrl: './transaction-list-item.component.html',
    styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent implements OnInit {
    @Input() transaction?: Transaction;

    constructor(
        private transactionService: TransactionService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    onDelete(): void {
        if (this.transaction) {
            this.transactionService
                .removeTransaction(this.transaction?.transaction_uid)
                .subscribe(() => {
                    console.log('Transaction removed');
                    this.router.navigate(['/transaction']);
                });
        }
    }
}
