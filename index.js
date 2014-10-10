
exports = module.exports = rtl;

/**
 * Join arguments from right to left immutably.
 * @api public
 */

exports.rtl = rtl;
function rtl(){
  var objs = [].slice.call(arguments);
  var buf = {};
  for (var i = objs.length; i >= 0; i--) {
    var obj = objs[i];
    for (var k in obj) {
      if (!obj.hasOwnProperty(k)) continue;
      buf[k] = obj[k];
    }
  }
  return buf;
}

/**
 * Joins arguments from left to right immutably.
 * @api public
 */

exports.ltr = ltr;
function ltr(){
  var objs = [].slice.call(arguments);
  var buf = {};
  for (var i = 0, l = objs.length; i < l; i++) {
    var obj = objs[i];
    for (var k in obj) {
      if (!obj.hasOwnProperty(k)) continue;
      buf[k] = obj[k];
    }
  }
  return buf;
}

/**
 * Joins arguments from right to left, mutating the head.
 * @param {Object} head
 * @api public
 */

exports.mutate = rtlMutate;
function rtlMutate(head){
  var objs = [].slice.call(arguments);
  for (var i = objs.length; i >= 0; i--) {
    var obj = objs[i];
    for (var k in obj) {
      if (!obj.hasOwnProperty(k)) continue;
      head[k] = obj[k];
    }
  }
  return head;
}
