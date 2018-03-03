// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBICC2AsPPYYxkVmfcCF9fDNSAJov-4TVU",
    authDomain: "thruthesky-firebase-backend.firebaseapp.com",
    databaseURL: "https://thruthesky-firebase-backend.firebaseio.com",
    projectId: "thruthesky-firebase-backend",
    storageBucket: "thruthesky-firebase-backend.appspot.com",
    messagingSenderId: "918272936330"
  }
};
