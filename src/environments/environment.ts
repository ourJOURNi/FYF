// This file can be replaced during build by using the `fileReplacements` array.

// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

// The list of file replacements can be found in `angular.json`.

// const url is commented out depending on which you are testing with.

// local host is for local machine and 10.0.1.8 is for android testing

import 'zone.js/plugins/zone-error';

const ip = '10.0.1.16';
const mobileIp = '192.168.43.128';
const wsEndpoint = 'ws://localhost:8081';
const baseUrl = `http://${ip}:3000`;
const fairsUrl = `http://${ip}:4000`;

export const environment = {
  production: false,
  url: baseUrl,
  fairsUrl: fairsUrl,
  wsEndpoint
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
