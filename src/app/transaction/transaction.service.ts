import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '@Types/transaction/transaction';
import { Observable } from 'rxjs';
import { TransactionModule } from './transaction.module';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    constructor(private http: HttpClient) {}

    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>('localhost:3000/transaction');
    }

    createTransaction(newTrans: Transaction): Observable<Transaction> {
        return this.http.post<Transaction>(
            'localhost:3000/transactions',
            newTrans
        );
    }

    removeTransaction(uid: Transaction['transaction_uid']) {
        return this.http.delete('localhost:3000/transactions/' + uid);
    }
}
