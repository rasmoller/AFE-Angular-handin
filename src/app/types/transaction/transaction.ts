import { CreditCard } from '@Types/credit-card/credit-card';

export const CURRENCIES = ['CAD', 'EUR', 'KYD', 'MWK', 'NAD', 'USD'];

type Currency = 'CAD' | 'EUR' | 'KYD' | 'MWK' | 'NAD' | 'USD';

export interface Transaction {
    transaction_uid: string;
    credit_card: CreditCard;
    amount: number;
    currency: Currency;
    comment: string;
    date: Date;
}
