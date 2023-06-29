export const oktaConfig = {
    clientId: '0oaa4z47y3pTXolLD5d7',
    issuer: 'https://dev-77889079.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}