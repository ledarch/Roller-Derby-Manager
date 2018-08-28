interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'pNGkmjrLW6F2nPrypgebCrm9ldzaKCIP',
  domain: 'roller-derby-manager.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
