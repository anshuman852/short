'use strict';

var ShortName = function (name) {
	if (typeof name !== 'string') {
		return name;
	}

	var names = name.split(' ');
	if (names.length === 1) {
		return name;
	}

	var firstName = names[0];
	var firstInitial = firstName.substr(0, 1);
	var lastName = names[names.length - 1];

	return firstInitial + ' ' + lastName;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = ShortName;
}
