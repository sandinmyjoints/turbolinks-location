/*!
 * turbolinks-location
 * Copyright(c) 2017 William Bert
 * ISC Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */
var boolify = require('boolify');

/**
 * Module exports.
 * @public
 */

module.exports = turbolinksLocation;

/**
 * Include Turbolinks-Location header in response.
 *
 * See README for options.
 *
 * @param {Object} options
 * @return {Function} middleware
 * @public
 */

function turbolinksLocation(options) {
  var opts = options || {};
  opts.onlyWhenHeader = opts.onlyWhenHeader || false;
  opts.header = opts.header || 'x-turbolinks-request';

  return function (req, res, next) {
    if(!opts.onlyWhenHeader || boolify(req.get(opts.header))) {
      res.setHeader('Turbolinks-Location', req.originalUrl)
    }

    next()
  };
};
