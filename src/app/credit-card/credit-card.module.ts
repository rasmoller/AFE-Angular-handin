import { NgModule } from '@angular/core';
import { CreditCardAddComponent } from './components/credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './components/credit-card-list-item/credit-card-list-item.component';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RmUnderscorePipe } from './pipes/rm-underscore.pipe';

const routes: Routes = [
    {
        path: '',
        component: CreditCardListComponent,
    },
    {
        path: 'add',
        component: CreditCardAddComponent,
    },
    {
        path: ':card_number',
        component: CreditCardDetailsComponent,
    },
];

@NgModule({
    declarations: [
        CreditCardAddComponent,
        CreditCardListComponent,
        CreditCardListItemComponent,
        CreditCardDetailsComponent,
        RmUnderscorePipe,
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
    exports: [RouterModule, RmUnderscorePipe],
})
export class CreditCardModule { }
