import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.less'
})
export class ProfileComponent implements OnInit {
    username = '';

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.getAuthInfo().subscribe(authInfo => {
            this.username = authInfo.username ? authInfo.username : '';
        });
    }

    public onLogoutButtonClick(): void {
        this.authService.logout();
    }
}
