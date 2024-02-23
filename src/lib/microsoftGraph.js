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
let uri = "/"
let port = 8080
const logoutRequest = {
  mainWindowRedirectUri: uri,
};

export default {
  mounted() {
    const route = this.$route;
    uri = route.path;
    console.log("Routes path is :", route.path)
    logoutRequest.mainWindowRedirectUri = `http://localhost:${port}${uri}`;
  },
}

const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: "e8137439-4d1d-462d-a85f-f81cfea8f0d8",
    mainWindowRedirectUri: uri
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
})

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