import {Component, Inject} from '@angular/core';
import {TuiAlertService} from "@taiga-ui/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.less'
})
export class MenuComponent {
    activeItemIndex = 0;

    constructor(private router: Router) {}
}
