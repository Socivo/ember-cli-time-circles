/* eslint-env node */
'use strict';
var Funnel = require('broccoli-funnel');
var path = require('path')
module.exports = {
  name: 'ember-cli-time-circles',
  included: function(app) {
    this._super.included.apply(this, arguments);
    this.app.import('vendor/time-circles.js');
    this.app.import('vendor/time-circles.css');
  },
  treeForVendor: function (tree) {

    var timeCirclesJS = path.join(this.app.project.root, 'node_modules', 'timecircles', 'dist');
    var vendorTree = new Funnel(timeCirclesJS, {
      files: ['time-circles.js']
    });
    return vendorTree;
  },
  treeForStyles: function (tree) {
    var timeCirclesCSS = path.join(this.app.project.root, 'node_modules', 'timecircles', 'dist');

    var cssTree = new Funnel(timeCirclesCSS, {
      files: ['time-circles.css'],
      destDir: 'vendor'
    });
    return cssTree;
  },
  isDevelopingAddon() {
    return true;
  }


};
