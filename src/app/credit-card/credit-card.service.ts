import { Injectable } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CreditCardService {
    url: string = 'http://localhost:3000';
    constructor(private http: HttpClient) {}

    getCreditCards(): Observable<CreditCard[]> {
        return this.http.get<CreditCard[]>(this.url + '/cards');
    }

    getCreditCardByCardNumber(
        cardNumber: CreditCard['card_number'] | null
    ): Observable<CreditCard> {
        if (cardNumber) {
            return this.http.get<CreditCard>(this.url + '/cards/' + cardNumber);
        } else {
            return of();
        }
    }

    addCreditCard(newCC: CreditCard): Observable<CreditCard> {
        return this.http.post<CreditCard>(this.url + '/cards', newCC);
    }

    removeCreditCard(cardNumber: CreditCard['card_number']) {
        return this.http.delete(this.url + '/cards/' + cardNumber);
    }
}
