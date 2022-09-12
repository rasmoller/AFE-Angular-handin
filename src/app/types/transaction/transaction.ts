import { CreditCard } from '@Types/credit-card/credit-card';

export interface Transaction {
    transaction_uid: string;
    credit_card: CreditCard;
    amount: number;
    comment: string;
    date: Date;
}
