
/**
 * NotFoundRoute error
 *
 */

function NotFoundRouteError (path){

  this.path = path;
  this.message += ' Cannot find ' + path;


  Error.call(this, this.message);
  Error.captureStackTrace(this, arguments.callee);

};

/**
 * Inherits from Error.
 */

NotFoundRouteError.prototype.__proto__ = Error.prototype;






/**
 * NotFoundModel error ( loading model )
 *  -- inner find exception
 *  -- empty return 
*/
function NotFoundModelError (path, err){
  this.path = path;
  this.message = '';

  this.err = err;

  if (this.path) {
    this.message += ' Cannot find ' + path;
  };

  if (err) {
    this.message += ' Error: ' + err.message;
  };

  Error.call(this, this.message);
  Error.captureStackTrace(this, arguments.callee);
};



/**
 * Inherits from Error.
 */

NotFoundModelError.prototype.__proto__ = Error.prototype;



/**
 * Module exports.
 */

module.exports.NotFoundRouteError = NotFoundRouteError;

/**
 * Module exports.
 */

module.exports.NotFoundModelError = NotFoundModelError;
