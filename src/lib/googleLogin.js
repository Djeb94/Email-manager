import { useGoogleLogin, useGoogleLogout } from 'vue3-google-login'

export function useGoogleSignIn() {
  const { signInG } = useGoogleLogin({
    clientId: '93739110920-ojj41p4nookibc1urvt1a582nq55no7u.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account',
    fetch_basic_profile: true,
  });

  return signInG;
}

export function useGoogleSignOut() {
  const { signOutG } = useGoogleLogout();

  return signOutG;
}
