const functions = require('firebase-functions');
const { sapperServer } = require('./__sapper__/build/server/server');


exports.ssr = functions.https.onRequest(sapperServer);