import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const user = authService.userValue;
    if (user) {
        return true;
    }

    return router.navigate(['login']);
};
