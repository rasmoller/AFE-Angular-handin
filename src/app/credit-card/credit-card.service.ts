import { Injectable } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CreditCardService {
    constructor(private http: HttpClient) {}

    getCreditCards(): Observable<CreditCard[]> {
        return of<CreditCard[]>([]);
        //return this.http.get<CreditCard[]>('localhost:3000/credit_cards');
    }

    getCreditCardById(
        cardNumber: CreditCard['card_number']
    ): Observable<CreditCard> {
        return this.http.get<CreditCard>(
            'localhost:3000/credit_cards/' + cardNumber
        );
    }

    addCreditCard(newCC: CreditCard): Observable<CreditCard> {
        return this.http.post<CreditCard>('localhost:3000/credit_cards', newCC);
    }

    removeCreditCard(cardNumber: CreditCard['card_number']) {
        return this.http.delete('localhost:3000/credit_cards/' + cardNumber);
    }
}
