import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
    public areCredentialsEntered = false;

    readonly signInForm = new FormGroup({
        usernameInput: new FormControl('', [Validators.required, Validators.minLength(3)]),
        passwordInput : new FormControl('', [Validators.required, Validators.minLength(7)]),
    });

    constructor(private router: Router,
                private authService: AuthService
    ) {}

    ngOnInit() {
        this.signInForm.get('usernameInput')?.valueChanges.subscribe(() => {
            this.checkCredentialsState()
        });

        this.signInForm.get('passwordInput')?.valueChanges.subscribe(() => {
            this.checkCredentialsState()
        });
    }

    private checkCredentialsState(): void {
        if (this.signInForm.get('usernameInput')?.value
            && !this.signInForm.get('usernameInput')?.errors
            && this.signInForm.get('passwordInput')?.value
            && !this.signInForm.get('passwordInput')?.errors
        ) {
            this.areCredentialsEntered = true;
        } else {
            this.areCredentialsEntered = false;
        }
    }

    public onCreateAccountButtonClick() {
        return this.router.navigate(['registration']);
    }

    public onSubmitButtonClick(): void {
        const user = {
            username: this.signInForm.get('usernameInput')?.value,
            password: this.signInForm.get('passwordInput')?.value
        } as User;

        this.authService.login(user).subscribe(() => {
            this.router.navigate(['menu']);
        });
    }
}
