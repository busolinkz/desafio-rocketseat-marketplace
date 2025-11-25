export interface AuthSuccessResponse {
  message: string;
  user: {
    userId: number;
    email: string;
    iat: number;
    exp: number;
  }
}
