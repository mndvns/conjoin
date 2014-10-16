# conjoin

Conjoin objects

## Examples

```
var conjoin = require('conjoin');

var a = { a: 1, b: 5 };
var b = { a: 2, c: 8 };
var c = { d: 0 };

// join multiple objects from right to left without mutation.

conjoin(c, b, a);
// => { a: 2, b: 5, c: 8, d: 0 });
```

```
// or go from left to right

conjoin.ltr(c, b, a);
// => { a: 1, b: 5, c: 5, d: 0 });
```

```
// or to mutate the head

conjoin.mutate(c, b, a);
// c === { a: 2, b: 5, c: 8, d: 0 });
```

## Installation

Via (npm(1))[https://www.npmjs.org/doc/]:

```sh
npm install conjoin
```

Via (component(1))[https://github.com/componentjs/component]:

```sh
component install mndvns/conjoin
```

## Tests

```
npm test
```

## License

MIT
