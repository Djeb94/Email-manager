import * as msal from '@azure/msal-browser'

/**
 * List the requested scopes (aka. the requested permissions)
 */
export const requestedScopes = {
  scopes: ["Mail.Read"]
}

/**
 * List the logout account 
 */
const logoutRequest = {
  mainWindowRedirectUri: "/",
};

const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: "e8137439-4d1d-462d-a85f-f81cfea8f0d8",  //"e8137439-4d1d-462d-a85f-f81cfea8f0d8"
    mainWindowRedirectUri: "/"
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
})

//if using "msale v3.x", otherwise in "msale v2.x" delete the next line
msalInstance.initialize();

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/messages"
};

export async function signInAndGetUser () {
  const authResult = await msalInstance.loginPopup(requestedScopes)
  msalInstance.setActiveAccount(authResult.account)
  return authResult
}

export async function signOutUser () {
  const authResult = await msalInstance.logoutPopup(logoutRequest )
  return authResult
}




