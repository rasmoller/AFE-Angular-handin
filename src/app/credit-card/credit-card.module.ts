import { NgModule } from '@angular/core';
import { CreditCardAddComponent } from './components/credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './components/credit-card-list-item/credit-card-list-item.component';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';

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
        path: ':id',
        component: CreditCardDetailsComponent,
    },
];

@NgModule({
    declarations: [
        CreditCardAddComponent,
        CreditCardListComponent,
        CreditCardListItemComponent,
        CreditCardDetailsComponent,
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreditCardModule {}
