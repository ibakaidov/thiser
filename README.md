# Thiser
Module for create constructors. Util move fields...

## Example

```js
	var thiser = require("./");


	function Cat (options){
		thiser(this, options, {age:0,sex:0}, ["name"]);
	};
	
	var zosya = new Cat({name:"Zosya", age:7});
	console.log(zosya.sex); // 0
	var noname = new Cat({sex:1}); // throw error: "Required field 'name' doesn't pass."
```

## API

## thiser(thisObj, options, defaults, required)

Move fields from defaults and options params to thisObj, if in options willn't required field, then thiser will throw error.

### Params:

* **object** *thisObj* The object to which the property will be assigned. Default: {}.
* **object** *options* The object from which the property will be assigned. Default: {}.
* **object** *defaults* The object from which the property will be assigned. Default: {}.
* **array** *required* Options object will test and if in options willn't required field, then thiser will throw error. Default: [].