import { CreditCard } from '@Types/credit-card/credit-card';

type Currency = 'DKK' | 'EUR' | 'SEK' | 'NOK' | 'GBP';

export interface Transaction {
    transaction_uid: string;
    credit_card: CreditCard;
    amount: number;
    currency: Currency;
    comment: string;
    date: Date;
}
