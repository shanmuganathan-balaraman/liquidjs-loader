const loaderUtils = require("loader-utils");
const { Liquid } = require('liquidjs');
const path = require('path');

module.exports = function(source, map) {
  const options = loaderUtils.getOptions(this) || {};
  const data = options.data || {};
  const liquidOptions = Object.assign({}, options);
  delete liquidOptions.data;
  liquidOptions.root = liquidOptions.root || this.context;
  const engine = new Liquid(liquidOptions);
  this.callback(null, engine.parseAndRenderSync(source, data), map);
};