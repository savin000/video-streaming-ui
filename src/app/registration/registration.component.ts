import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.less'
})
export class RegistrationComponent {
    public areCredentialsEntered = false;

    readonly signUpForm = new FormGroup({
        usernameInput: new FormControl('', [Validators.required, Validators.minLength(3)]),
        passwordInput : new FormControl('', [Validators.required, Validators.minLength(7)]),
        repeatedPasswordInput : new FormControl('', [Validators.required, Validators.minLength(7)]),
    });

    constructor(private authService: AuthService,
                private router: Router
    ) {}

    ngOnInit() {
        this.signUpForm.get('usernameInput')?.valueChanges.subscribe(() => {
            this.checkCredentialsState()
        });

        this.signUpForm.get('passwordInput')?.valueChanges.subscribe(() => {
            this.checkCredentialsState()
        });

        this.signUpForm.get('repeatedPasswordInput')?.valueChanges.subscribe(() => {
            this.checkCredentialsState()
        });
    }

    private checkCredentialsState(): void {
        if (this.signUpForm.get('usernameInput')?.value
            && !this.signUpForm.get('usernameInput')?.errors
            && this.signUpForm.get('passwordInput')?.value
            && !this.signUpForm.get('passwordInput')?.errors
            && this.signUpForm.get('repeatedPasswordInput')?.value
            && !this.signUpForm.get('repeatedPasswordInput')?.errors
        ) {
            this.areCredentialsEntered = true;
        } else {
            this.areCredentialsEntered = false;
        }
    }

    public onSubmitButtonClick(): void {
        if (this.signUpForm.get('passwordInput')?.value == this.signUpForm.get('repeatedPasswordInput')?.value) {
            const user = {
                username: this.signUpForm.get('usernameInput')?.value,
                password: this.signUpForm.get('passwordInput')?.value
            } as User;

            this.authService.register(user).subscribe(() => {
                this.router.navigate(['login']);
            });
        }
    }
}
