var createElement = ( function createElement() {
  
  "use strict";

  function InitCreateElement( name, val, result ) {

    if ( typeof name === "undefined" ) {
      return false;
    }
    if ( typeof val === "undefined" ) {
      val = "";
    }
    if ( typeof result === "undefined" ) {
      result = "";
    }

    var ret = document.createElement( name ),
        i;

    if ( val.length > 1 && (val[0] === "[" && val[val.length - 1] === "]") ) {

      var values = val.split("][");
      values[0] = values[0].substr(1);
      values[values.length - 1] = values[values.length - 1].substr(0, values[values.length - 1].length - 1);
      i = 0;
      var valuesLen = values.length;

      for ( i; i < valuesLen; i++ ) {

        var key,
            width = "",
            colonIndex = values[i].indexOf(":");

        if ( colonIndex > 0 ) {

          key = values[i].substr( 0, colonIndex );
          width = values[i].substr( colonIndex + 1 );

        } else {

          key = values[i].substr( 0 );

        }

        ret.setAttribute( key, width );

      }

    }
    if ( Array.isArray( result ) ) {

      i = 0;

      for ( i; i < result.length; i++ ) {

        if ( result[i].tagName ) {

          ret.appendChild( result[i] );

        } else {

          ret.appendChild( document.createTextNode( result[i] ) );

        }

      }

    } else {

      if ( result.tagName ) {

        ret.appendChild( result );

      } else {

        ret.innerHTML = result;

      }

    }

    return ret;
    
  }

  return InitCreateElement;

})( this );

if ( typeof module !== "undefined" && module.exports ) {
  // export functions for use in Node
  module.exports.createElement = function ( name, val, result ) {
    return createElement( name, val, result );
  };
} else if ( typeof define !== "undefined" && define.amd ) {
  // export function for use in AMD
  define([], function ( name, val, result ) {
    return createElement( name, val, result );
  });
}

