import { Injectable } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CreditCardService {
    constructor(private http: HttpClient) {}

    getCreditCards(): Observable<CreditCard[]> {
        // return of<CreditCard[]>([
        //     {
        //         card_number: '2',
        //         cardholder_name: '22',
        //         csc_code: 232,
        //         expiration_date_month: 2,
        //         expiration_date_year: 2029,
        //         issuer: 'xd',
        //     },
        // ]);

        return this.http.get<CreditCard[]>('https://localhost:3000/cards');
    }

    getCreditCardByCardNumber(
        cardNumber: CreditCard['card_number'] | null
    ): Observable<CreditCard> {
        if (cardNumber) {
            if (cardNumber == '2') {
                const cc: CreditCard = {
                    card_number: '2',
                    cardholder_name: '22',
                    csc_code: 234,
                    expiration_date_month: 12,
                    expiration_date_year: 22,
                    issuer: 'SXDD',
                };
                return of<CreditCard>(cc);
            }
            return this.http.get<CreditCard>(
                'localhost:3000/cards/' + cardNumber
            );
        } else {
            return of();
        }
    }

    addCreditCard(newCC: CreditCard): Observable<CreditCard> {
        return this.http.post<CreditCard>('localhost:3000/credit_cards', newCC);
    }

    removeCreditCard(cardNumber: CreditCard['card_number']) {
        return this.http.delete('localhost:3000/credit_cards/' + cardNumber);
    }
}
