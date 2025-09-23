'use strict';

// higher-order function practice:
// first-class func
function allCaps(str) {
  return str.toUpperCase();
}
function allLowCaps(str) {
  return str.toLowerCase();
}
//higher-order func
function sentenceTransformer(str, fn) {
  console.log(`Original name ${str}`);
  console.log(`transformed name: ${fn(str)}`);
}
//calling the func
// sentenceTransformer('Ruta Rlimaviciute', allCaps);
// sentenceTransformer('Ruta Klimaviciute', allLowCaps);
