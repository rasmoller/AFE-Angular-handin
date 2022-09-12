import { Component } from '@angular/core';
import { Route } from '@Types/base/route';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'HandIn1';

    routes: Route[] = [
        {
            label: 'Credit cards',
            url: '/credit-card',
        },
        {
            label: 'Transactions',
            url: '/transaction',
        },
    ];
}
