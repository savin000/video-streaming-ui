export interface JwtModel {
    type: string;
    accessToken: string;
    refreshToken: string;
}

export interface RefreshToken {
    refreshToken: string;
}

