import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '@Types/transaction/transaction';
import { Observable } from 'rxjs';
import { TransactionModule } from './transaction.module';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    url: string = 'http://localhost:3000';
    constructor(private http: HttpClient) {}

    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.url + '/transactions');
    }

    createTransaction(newTrans: Transaction): Observable<Transaction> {
        return this.http.post<Transaction>(
            this.url + '/transactions',
            newTrans
        );
    }

    removeTransaction(uid: Transaction['transaction_uid']) {
        return this.http.delete(this.url + '/transactions/' + uid);
    }
}
