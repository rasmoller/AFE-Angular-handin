import { Component, Input, OnInit } from '@angular/core';
import { Route } from '../route';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    @Input() routes!: Route[];

    constructor() {}

    ngOnInit(): void {}
}
