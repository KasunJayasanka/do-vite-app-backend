// api/index.js
const serverless = require('serverless-http');
const app = require('../app');      // adjust path if necessary

module.exports = serverless(app);
