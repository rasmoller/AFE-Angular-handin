import { NgModule } from '@angular/core';
import { TransactionOverviewComponent } from './components/transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TransactionOverviewComponent,
    },
    {
        path: 'add',
        component: TransactionAddComponent,
    },
];

@NgModule({
    declarations: [
        TransactionOverviewComponent,
        TransactionListComponent,
        TransactionListItemComponent,
        TransactionAddComponent,
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class TransactionModule {}
