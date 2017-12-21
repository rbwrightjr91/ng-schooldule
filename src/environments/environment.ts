// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBJ3OSQNEK663nTF5Xke8TVWTCCJYUldVI',
    authDomain: 'schooldule.firebaseapp.com',
    databaseURL: 'https://schooldule.firebaseio.com',
    projectId: 'schooldule',
    storageBucket: 'schooldule.appspot.com',
    messagingSenderId: '780177868534'
  }
};
