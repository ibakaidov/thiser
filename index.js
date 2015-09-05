module.exports = thiser;

/**
 * Move fields from defaults and options params to thisObj, if in options willn't required field, then thiser will throw error.
 * @param {object} thisObj The object to which the property will be assigned. Default: {}.
 * @param {object} options The object from which the property will be assigned. Default: {}.
 * @param {object} defaults The object from which the property will be assigned. Default: {}.
 * @param {array} required Options object will test and if in options willn't required field, then thiser will throw error. Default: [].
 */

function thiser (thisObj, options, defaults, required){
	if (required== null) required=[];
	if (defaults == null) defaults={};
	if (options == null)  options={};	
	if (thisObj == null)  thisObj={};	
	required.forEach(function(field){
		var err = new Error("Required field '"+field+"' doesn't pass.");
		if (options[field] === undefined) throw err;
	});
	
	map(defaults, function(value, key){
		if (undefined === options[key]) thisObj[key] = value;
	});
	map(options, function(value, key){
		thisObj[key]=value;
	});
		
	return thisObj;	
};

function map (obj, iterator){
	var n ={};
	for (var key in obj){
		n[key] = iterator(obj[key], key);
	}
	return n;
}