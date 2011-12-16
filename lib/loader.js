var  express = require('express')
  , cfg = require('cfg')
  , fs = require('fs')
  , path = require('path');






// create cfg items and set app path variables 
// when app_path is undefined, it will look up it.
exports.createConfig = function (app_path) {

  var config = cfg.createConfig(); 

  // it is called from index
  app_path = app_path || _lookUpRootAppDir( path.dirname( module.parent.parent.filename ) );  

  config.set('path', app_path);
  config.set('lib_path', path.join( app_path, 'lib') );
  config.set('model_path', path.join( app_path, 'app', 'models') );
  config.set('controller_path', path.join( app_path, 'app', 'controllers') );
  config.set('view_path', path.join( app_path, 'app', 'views') );
  
  return config;
};

exports.createServer = function(app_path){
  var app = express.createServer();
  app.useCfg(app_path);
  
  return app;
};


// works as Loader Facade of the boot process

exports.bootConfigureServer = function(app, next){
  require( path.join( app.cfg.get('lib_path'), 'server') ).bootConfigureServer(app, next);
};

exports.bootErrorHandler = function(app, next){
  require( path.join( app.cfg.get('lib_path'), 'server') ).bootErrorHandler(app, next);
};

exports.bootModels = function(config, next){
  require( path.join( config.get('lib_path') , 'models') ).bootModels(config,next); 
};

exports.bootControllers = function(app, next){
  require( path.join( app.cfg.get('lib_path') , 'controllers') ).bootControllers(app,next); 
};

exports.boot = function(app, next){
  require( path.join( app.cfg.get('lib_path') , 'server') ).boot(app,next); 
};



express.HTTPServer.prototype.useCfg =
express.HTTPSServer.prototype.useCfg = function(app_path){

  this.cfg = exports.createConfig(app_path);

};


function _lookUpRootAppDir (dir) {
  
  //if ( dir === '/' ) throw Error('not found app dir');

  if ( !path.existsSync( path.join(dir, 'package.json') ) ) {

      dir = _lookUpRootAppDir( path.join(dir, '..') );  

  }


  return dir;
};
