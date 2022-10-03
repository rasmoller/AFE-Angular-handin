import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private transactionService: TransactionService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    deleteClick() {
        if (this.transaction?.uid) {
            this.onDelete.emit(this.transaction.uid);
        }
    }
}
