import { Pipe, PipeTransform } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';

@Pipe({
    name: 'expirationDate',
})
export class ExpirationDatePipe implements PipeTransform {
    transform(card: CreditCard): string {
        return (
            ('0' + card.expiration_date_month).slice(-2) +
            '/' +
            card.expiration_date_year
        );
    }
}
