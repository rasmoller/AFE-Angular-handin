import { Component, Input, OnInit } from '@angular/core';
import { IRoute } from '@Types/base/route';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    @Input() routes!: IRoute[];

    constructor() {}

    ngOnInit(): void {}
}
