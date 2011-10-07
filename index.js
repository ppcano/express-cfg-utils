
//var server = require('express').HTTPServer.prototype
var  express = require('express');
  //, cfg = require('cfg')
  //, fs = require('fs')
  //, path = require('path');

exports.version = '0.0.1';

// create cfg items and set app path variables 
// when app_path is undefined, it will look up it.
/* 
exports.createConfig = function(app_path){

  var config = cfg.createConfig(); 

  // it is called from index
  app_path = app_path || this._lookUpRootAppDir( path.dirname( module.parent.parent.filename ) );  


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
*/
/*
var MyResource = module.exports = function MyResource(name, actions, app) {

};
*/




//module.exports = express;

//connect.prototype.cfg = function(){};

console.log('-----------------------------'+ express.version);

//module.exports = require('./lib/index');

//module.exports = express.HTTPServer;

//module.exports = exports = server;

//module.exports.NotFoundRouteError = require('./lib/errors').NotFoundRouteError;
//module.exports.NotFoundModelError = require('./lib/errors').NotFoundModelError;


express.HTTPServer.prototype.usecfg =
express.HTTPSServer.prototype.usecfg = function(name, actions, opts){
  return null;
};


console.log('---------------------------------useCFg');
//console.log( connect.prototype.cfg);
console.log( express.HTTPServer.prototype.usecfg);
//console.log( express.HTTPSServer.prototype);
console.log('---------------------------------useCFg');
