// Accepts an array or list of arguments and parses that array into a coordinate
// object. Use in a function like this:
// 
// function someFunc(...options) { return coordsFromParams(options) }
// function otherFunc(x, y, otherArgs) { return coordsFromParams(x, y) }
// 
// ...etc.
// Now, that first function, for example, could accept arguments like this:
// 
// someFunc(3, 7)                //=> {x: 3, y: 7}
// someFunc('3', '7')            //=> {x: 3, y: 7}
// someFunc(3, 7, 'foo')         //=> {x: 3, y: 7}
// someFunc('3, 7')              //=> {x: 3, y: 7}
// someFunc('3,7')               //=> {x: 3, y: 7}
// someFunc('3,7', 'foo')        //=> {x: 3, y: 7}
// someFunc({x: 3, y: 7})        //=> {x: 3, y: 7}
// someFunc({x: '3', y: '7'})    //=> {x: 3, y: 7}
// someFunc({x: 3, y: 7}, 'foo') //=> {x: 3, y: 7}
// 
// coordsFromParams will accept arguments in the same patterns as someFunc, and
// give the same result (an object with the shape {x: integer, y: integer}). You
// can also pass it an array with the same argument patterns as above, with the
// same result. This allows you to never worry about how coordinates are passed
// to a function; you can just use coordsFromParams and know that you'll have
// a properly-formatted and parsed coordinate object
export function coordsFromParams(...paramsAry) {
  const params     = _.flatten(paramsAry);
  const isCommaSep = _.isString(params[0]) ? params[0].split(',').length === 2 : false;
  const isCoordObj = _.isObject(params[0]) && _.has(params[0], 'x', 'y');
  const isTwoNums  = _.isNumber(parseInt(params[0], 10)) && _.isNumber(parseInt(params[1]), 10) && !isCommaSep && !isCoordObj;
  let   coords     = [null, null];

  if (isCommaSep) {
    coords = params[0].split(',')
  } else if (isCoordObj) {
    coords = [params[0].x, params[0].y]
  } else if (isTwoNums) {
    coords = _.first(params, 2)
  }

  return {x: parseInt(coords[0], 10), y: parseInt(coords[1], 10)};
}

export function coordString(...coordinates) {
  const coords = coordsFromParams(coordinates);
  return `${coords.x},${coords.y}`;
}