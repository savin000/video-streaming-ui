import {Injectable} from "@angular/core";
import {BehaviorSubject, delay, map, Observable, of, tap} from "rxjs";
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthInfo} from "../models/auth-info.model";
import {JwtModel, RefreshToken} from "../models/jwt.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userSubject: BehaviorSubject<JwtModel | null>;
    public user: Observable<JwtModel | null>;

    constructor(private router: Router,
                private http: HttpClient) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    public login(user: User) {
        return this.http.post<JwtModel>('http://localhost:8081/api/video-streaming-auth-service/auth/login', user)
            .pipe(map(jwtModel => {
                this.saveToken(jwtModel);
                return jwtModel;
            }));
    }

    public logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['login']);
    }

    public register(user: User) {
        return this.http.post('http://localhost:8081/api/video-streaming-auth-service/users', user);
    }

    public refreshToken(token: RefreshToken) {
        return this.http.post('http://localhost:8081/api/video-streaming-auth-service/auth/refresh', token);
    }

    public getAuthInfo(): Observable<AuthInfo> {
        return this.http.get('http://localhost:8081/api/video-streaming-auth-service/auth/info');
    }

    public saveToken(jwtModel: JwtModel) {
        localStorage.setItem('user', JSON.stringify(jwtModel));
        this.userSubject.next(jwtModel);
    }
}
