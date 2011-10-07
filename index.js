
var  express = require('express')
  , cfg = require('cfg')
  , fs = require('fs')
  , path = require('path');

exports.version = '0.0.1';

// create cfg items and set app path variables 
// when app_path is undefined, it will look up it.
exports.createConfig = function(app_path){

  var config = cfg.createConfig(); 

  // it is called from index
  app_path = app_path || this._lookUpRootAppDir( path.dirname( module.parent.filename ) );  


  config.set('path', app_path);
  config.set('lib_path', path.join( app_path, 'lib') );
  config.set('model_path', path.join( app_path, 'app', 'models') );
  config.set('controller_path', path.join( app_path, 'app', 'controllers') );
  
  return config;

};

exports._lookUpRootAppDir = function(dir){


  
  //if ( dir === '/' ) throw Error('not found app dir');

  if ( !path.existsSync( path.join(dir, 'package.json') ) ) {

      dir = this._lookUpRootAppDir( path.join(dir, '..') );  

  }


  return dir;
};






express.HTTPServer.prototype.useCfg =
express.HTTPSServer.prototype.useCfg = function(app_path){

  this.cfg = exports.createConfig(app_path);

};


module.exports.NotFoundRouteError = require('./lib/errors').NotFoundRouteError;
module.exports.NotFoundModelError = require('./lib/errors').NotFoundModelError;
