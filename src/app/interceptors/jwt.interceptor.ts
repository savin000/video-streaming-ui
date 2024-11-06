import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, switchMap, tap, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {JwtModel} from "../models/jwt.model";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.userValue;
        const isLoggedIn = token && token.accessToken;

        if (isLoggedIn) {
            request = this.addAuthorizationHeader(token, request);
        }

        return next.handle(request).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && !request.url.includes('auth/login') && (error.status === 403 || error.status === 401)) {
                this.refreshToken(request, next);
            }

            return throwError(error);
        }));
    }

    private addAuthorizationHeader(token: JwtModel | null, request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token?.accessToken}`
            }
        });
    }

    private refreshToken(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            const token = this.authService.userValue?.refreshToken;

            if (token) {
                this.authService.refreshToken({refreshToken: token}).pipe(
                    switchMap((token: any) => {
                        this.isRefreshing = false;

                        this.authService.saveToken(token);
                        this.refreshTokenSubject.next(token.accessToken);

                        return next.handle(this.addAuthorizationHeader(token, request));
                    }),
                    catchError(error => {
                        this.isRefreshing = false;
                        this.authService.logout();
                        return throwError(error);
                    })
                ).subscribe();
            }
        }
    }
}
