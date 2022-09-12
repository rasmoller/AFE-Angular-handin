import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './components/transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';



@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
