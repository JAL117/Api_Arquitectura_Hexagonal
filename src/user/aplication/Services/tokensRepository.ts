  export interface TokensRepository {
    generateToken(payload: JwtPayload): JwtToken;
    verifyToken(token: string): JwtPayload | null;
  }