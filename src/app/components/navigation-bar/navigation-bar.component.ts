import { Component, Input, OnInit } from '@angular/core';

export interface route {
    label: string;
    url: string;
    icon?: string;
}

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    @Input() routes!: route[];

    constructor() {}

    ngOnInit(): void {}
}
