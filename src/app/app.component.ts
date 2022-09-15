import { Component } from '@angular/core';
import { IRoute } from '@Types/base/route';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'HandIn1';

    routes: IRoute[] = [
        {
            label: 'Home',
            url: '',
        },
        {
            label: 'Add Credit card',
            url: '/credit-card/add',
        },
        {
            label: 'Transactions',
            url: '/transaction',
        },
    ];
}
