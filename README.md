#  [![Build Status](https://secure.travis-ci.org/fahad19/short-name.png?branch=master)](http://travis-ci.org/fahad19/short-name)

> Shorten long names (mostly human names).


## Install

```sh
$ npm install --save @anshuman852/short@0.2.2
```


## Usage

In node/browserify:

```js
var shortName = require('short-name');

var name = shortName('Tom Marvolo Riddle'); // returns `T Riddle`
```

In browser:

```html
<script src="dist/short-name.min.js"></script>
<script>
    var name = ShortName('Tom Marvolo Riddle');
</script>
```

## License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
