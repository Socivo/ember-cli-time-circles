/* eslint-env node */
'use strict';
var Funnel = require('broccoli-funnel');
var path = require('path')
module.exports = {
  name: 'ember-cli-time-circles',
  included: function(app) {
    this._super.included.apply(this, arguments);
    this.app.import('vendor/TimeCircles.js');
    this.app.import('vendor/TimeCircles.css');
  },
  treeForVendor: function (tree) {

    var timeCirclesJS = path.join(this.app.project.root, 'node_modules', 'timecircles', 'inc');
    var vendorTree = new Funnel(timeCirclesJS, {
      files: ['TimeCircles.js']
    });
    return vendorTree;
  },
  treeForStyles: function (tree) {
    var timeCirclesCSS = path.join(this.app.project.root, 'node_modules', 'timecircles', 'inc');

    var cssTree = new Funnel(timeCirclesCSS, {
      files: ['TimeCircles.css'],
      destDir: 'vendor'
    });
    return cssTree;
  },
  isDevelopingAddon() {
    return true;
  }


};
