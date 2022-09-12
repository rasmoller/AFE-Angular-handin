import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '@Types/transaction/transaction';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    constructor(private http: HttpClient) {}

    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>('localhost:3000/credit_cards');
    }

    createTransaction(newTrans: Transaction): Observable<Transaction> {
        return this.http.post<Transaction>(
            'localhost:3000/credit_cards',
            newTrans
        );
    }

    removeCreditCard(uid: Transaction['transaction_uid']) {
        return this.http.delete('localhost:3000/credit_cards/' + uid);
    }
}
