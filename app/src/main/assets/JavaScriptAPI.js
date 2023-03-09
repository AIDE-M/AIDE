// Standard API
var Array = function (sizeOpt) {
	// Reflects the length of the array.
	this.length = 0;
	// Removes the last element from an array and returns that element.
	this.pop = function () { return this[0]; };
	// Adds one or more elements to the end of an array and returns the new length of the array.
	this.push = function (element) { this[0] = element; return 0; };
	// Reverses the order of the elements of an array
	this.reverse = function() {};
	// Removes the first element from an array and returns that element.
	this.shift = function () { return this[0]; };
	// Sorts the elements of an array.
	this.sort = function (compareFunction) {};
	// Adds and/or removes elements from an array.
	this.splice = function (index, howMany, element1, elementN) {};
	// Adds one or more elements to the front of an array and returns the new length of the array.
	this.unshift = function (element1, elementN) { return 0; };
	// Returns a new array comprised of this array joined with other array(s) and/or value(s).
	this.concat = function(value1, valueN) {};
	// Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
	this.indexOf = function(searchElement) { return 0;};
	// Joins all elements of an array into a string.
	this.join = function(separatorOpt) { return ""; };
	// Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
	this.lastIndexOf = function(searchElement) { return 0; };
	// Extracts a section of an array and returns a new array.
	this.slice = function(begin, endOpt) { return new Array(); };
	// Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.toSource method.
	this.toSource = function() { return ""; };
	// Returns a string representing the array and its elements. Overrides the Object.toString method.
	this.toString = function() { return ""; };
	// Returns the primitive value of the array. Overrides the Object.valueOf method.
	this.valueOf = function() { return 0; };
	// Creates a new array with all of the elements of this array for which the provided filtering function returns true.
	this.filter = function(callback) { return new Array(); };
	// Calls a function for each element in the array.
	this.forEach = function(callback) {};
	// Returns true if every element in this array satisfies the provided testing function.
	this.every = function(callback) { return false; };
	// Creates a new array with the results of calling a provided function on every element in this array.
	this.map = function(callback) { var arr; arr[0] = callback(this[0]); return arr; };
	// Returns true if at least one element in this array satisfies the provided testing function.
	this.some = function(callback) { return false; };
};

var Date = function(milliseconds) {
	// Returns the numeric value corresponding to the current time.
	this.now = new Date();
	// Returns the day of the month for the specified date according to local time.
	this.getDate = function () { return 0; };
	// Returns the day of the week for the specified date according to local time.
	this. getDay = function () { return 0; };
	// Returns the year of the specified date according to local time.
	this.getFullYear = function () { return 0; };
	// Returns the hour in the specified date according to local time.
	this.getHours = function () { return 0; };
	// Returns the milliseconds in the specified date according to local time.
	this.getMilliseconds = function () { return 0; };
	// Returns the minutes in the specified date according to local time.
	this.getMinutes = function () { return 0; };
	// Returns the month in the specified date according to local time.
	this.getMonth = function () { return 0; };
	// Returns the seconds in the specified date according to local time.
	this.getSeconds = function () { return 0; };
	// Returns the numeric value corresponding to the time for the specified date according to universal time.
	this.  getTime = function () {return 0;};
	// Returns the time-zone offset in minutes for the current locale.
	this. getTimezoneOffset = function () {return 0;};
	// Returns the day (date) of the month in the specified date according to universal time.
	this. getUTCDate = function () {return 0;};
	// Returns the day of the week in the specified date according to universal time.
	this. getUTCDay = function () {return 0;};
	// Returns the year in the specified date according to universal time.
	this. getUTCFullYear = function () {return 0;};
	// Returns the hours in the specified date according to universal time.
	this. getUTCHours = function () {return 0;};
	// Returns the milliseconds in the specified date according to universal time.
	this. getUTCMilliseconds = function () {return 0;};
	// Returns the minutes in the specified date according to universal time.
	this. getUTCMinutes = function () {return 0;};
	// Returns the month in the specified date according to universal time.
	this. getUTCMonth = function () {return 0;};
	// Returns the seconds in the specified date according to universal time.
	this. getUTCSeconds = function () {return 0;};
	// Returns the year in the specified date according to local time.
	this. getYear = function () {return 0;};
	// Sets the day of the month for a specified date according to local time.
	this. setDate = function (dayValue) {};
	// Sets the full year for a specified date according to local time.
	this. setFullYear = function (yearValue, monthValueOpt, dayValueOpt) {};
	// Sets the hours for a specified date according to local time.
	this. setHours = function (hoursValue, minutesValueOpt, secondsValueOpt, msValueOpt) {};
	// Sets the milliseconds for a specified date according to local time.
	this. setMilliseconds = function (millisecondsValue) {};
	// Sets the minutes for a specified date according to local time.
	this. setMinutes = function (minutesValueOpt, secondsValueOpt, msValueOpt) {};
	// Sets the month for a specified date according to local time.
	this. setMonth = function (monthValue, dayValueOpt) {};
	// Sets the seconds for a specified date according to local time.
	this. setSeconds = function (secondsValue, msValueOpt) {};
	// Sets the value of the Date object according to local time.
	this. setTime = function (timeValue) {};
	// Sets the day of the month for a specified date according to universal time.
	this. setUTCDate = function (dayValue) {};
	// Sets the full year for a specified date according to universal time.
	this. setUTCFullYear = function (yearValueOpt, monthValueOpt, dayValueOpt) {};
	// Sets the hour for a specified date according to universal time.
	this. setUTCHours = function (hoursValueOpt, minutesValueOpt, secondsValueOpt, msValueOpt) {};
	// Sets the milliseconds for a specified date according to universal time.
	this. setUTCMilliseconds = function (millisecondsValue) {};
	// Sets the minutes for a specified date according to universal time.
	this. setUTCMinutes = function (minutesValueOpt, secondsValueOpt, msValueOpt) {};
	// Sets the month for a specified date according to universal time.
	this. setUTCMonth = function (monthValueOpt, dayValueOpt) {};
	// Sets the seconds for a specified date according to universal time.
	this. setUTCSeconds = function (secondsValueOpt, msValueOpt) {};
	// Sets the year for a specified date according to local time.
	this. setYear = function (yearValue) {};
	// Converts a date to a string, using the Internet GMT conventions.
	this. toGMTString = function () {return ""};
	// Converts a date to a string, using the current locale's conventions. Overrides the Object.toLocaleString method.
	this. toLocaleString = function () {return ""};
	// Returns the "date" portion of the Date as a string, using the current locale's conventions.
	this. toLocaleDateString = function () {return ""};
	// Returns the "time" portion of the Date as a string, using the current locale's conventions.
	this. toLocaleTimeString = function () {return ""};
	// Returns an object literal representing the specified Date object; you can use this value to create a new object. Overrides the Object.toSource method.
	this. toSource = function () {return "";};
	// Returns a string representing the specified Date object. Overrides the Object.toString method.
	this. toString = function () {return ""};
	// Converts a date to a string, using the universal time convention.
	this. toUTCString = function () {return ""};
	// Returns the primitive value of a Date object. Overrides the Object.valueOf method.
	this. valueOf = function () {return 0};
};

var Error = function(message) {
	
	// Error description/message (IE only).
	this. description = "";
	// Path to file that raised this error (Mozilla only).
	this. fileName =  "";
	// Line number in file that raised this error (Mozilla only).
	this. lineNumber = 0 ;
	// Error message.
	this. message = "";
	// Error name.
	this. name = "";
	// Error number (IE only).
	this. number = "";
	// Stack trace (Mozilla only).
	this. stack = "";
};

var Function = function(arg1, argN) {
	// An array corresponding to the arguments passed to a function. This is deprecated as a property of Function.
	this.arguments = new Array();
	// Specifies the number of arguments expected by the function.
	this.	arity = 0;
	// Specifies the function that invoked the currently executing function (non-standard).
	this.	caller = new Function();
	// Specifies the function that creates an object's prototype.
	this.	constructor = new Function();
	// Specifies the number of arguments expected by the function.
	this.	length = 0;
	// Allows you to apply the method of another object in the context of a different object (the calling object).
	this.	apply = function (thisArg, argArrayOpt) {};
	// Allows you to call (execute) a method of another object in the context of a different object (the calling object).
	this.	call = function (thisArg, arg1, argN) {};
	// Returns a string representing the source code of the function. Overrides the Object.toSource method.
	this.	toSource = function () {return "";};
	// Returns a string representing the source code of the function. Overrides the Object.toString method.
	this.	toString = function () {return "";};
	// Returns a string representing the source code of the function. Overrides the Object.valueOf method.
	this.	valueOf = function () {return "";};
};

var Math =
{
	// Euler's constant and the base of natural logarithms, approximately 2.718.
	E :0,
	// Natural logarithm of 2, approximately 0.693.
	LN2 :0,
	// Natural logarithm of 10, approximately 2.302.
	LN10 :0,
	// Base 2 logarithm of E, approximately 1.442.
	LOG2E :0,
	// Base 10 logarithm of E, approximately 0.434.
	LOG10E :0,
	// Ratio of the circumference of a circle of its diameter, approximately 3.14159.
	PI :0,
	// Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707.
	SQRT1_2 :0,
	// Square root of 2, approximately 1.414.
	SQRT2 :0,
	// Returns the absolute value of a number.
	abs : function (x) {return 0;},
	// Returns the arccosine (in radians) of a number.
	acos : function (x) {return 0;},
	// Returns the arcsine (in radians) of a number.
	asin : function (x) {return 0;},
	// Returns the arctangent (in radians) of a number.
	atan : function (x) {return 0;},
	// Returns the arctangent of the quotient of its arguments.
	atan2 : function (x) {return 0;},
	// Returns the smallest integer greater than or equal to a number.
	ceil : function (x) {return 0;},
	// Returns the cosine of a number.
	cos : function (x) {return 0;},
	// Returns Enumber, where number is the argument, and E is Euler's constant, the base of the natural logarithms.
	exp : function (x) {return 0;},
	// Returns the largest integer less than or equal to a number.
	floor : function (x) {return 0;},
	// Returns the natural logarithm (base E) of a number.
	log : function (x) {return 0;},
	// Returns the greater of two numbers.
	max : function (a, b) {return 0;},
	// Returns the lesser of two numbers.
	min : function (a, b) {return 0;},
	// Returns base to the exponent power, that is, base exponent.
	pow : function (base, exponent) {return 0;},
	// Returns a pseudo-random number between 0 and 1.
	random : function () {return 0;},
	// Returns the value of a number rounded to the nearest integer.
	round : function (x) {return 0;},
	// Returns the sine of a number.
	sin : function (x) {return 0;},
	// Returns the square root of a number.
	sqrt : function (x) {return 0;},
	// Returns the tangent of a number.
	tan : function (x) {return 0;},
};

var Number = function(value) {
	// The largest representable number.
	Number.MAX_VALUE = 0;
	// The smallest representable number.
	Number.	MIN_VALUE = 0;
	// Special "not a number" value.
	Number.	NaN = 0;
	// Special value representing negative infinity; returned on overflow.
	Number.	NEGATIVE_INFINITY = 0;
	// Special value representing infinity; returned on overflow.
	Number.	POSITIVE_INFINITY = 0;
	// Returns a string representing the number in exponential notation.
	this.toExponential = function () {return "";};
	// Returns a string representing the number in fixed-point notation.
	this.toFixed = function () {return "";};
	// Returns a human readable string representing the number using the locale of the environment. Overrides the Object.toLocaleString method.
	this.toLocaleString = function () {return "";};
	// Returns a string representing the number to a specified precision in fixed-point notation.
	this.toPrecision = function () {return "";};
	// Returns an object literal representing the specified Number object; you can use this value to create a new object. Overrides the Object.toSource method.
	this.toSource = function () {return 0;};
	// Returns a string representing the specified object. Overrides the Object.toString method.
	this.toString = function () {return "";};
	// Returns the primitive value of the specified object. Overrides the Object.valueOf method. In addition, this object inherits the watch and unwatch methods from Object.
	this.valueOf = function () {return 0;};
};

var Boolean = function(value) {
	// Returns an object literal representing the specified Boolean object; you can use this value to create a new object. Overrides the Object.toSource method.
	this.toSource = function () {return "";};
	// Returns a string representing the specified object. Overrides the Object.toString method.
	this.toString = function () {return "";};
	// Returns the primitive value of a Boolean object. Overrides the Object.valueOf method.In addition, this object inherits the watch and unwatch methods from Object.
	this.valueOf = function () {return false;};
};

var RegExp = function(pattern) {
	// Whether to test the regular expression against all possible matches in a string, or only against the first. As of JavaScript 1.5, a property of a RegExp instance, not the RegExp object.
	this.	global = false;
	// Whether to ignore case while attempting a match in a string. As of JavaScript 1.5, a property of a RegExp instance, not the RegExp object.
	this.			ignoreCase = false;
	// The index at which to start the next match. As of JavaScript 1.5, a property of a RegExp instance, not the RegExp object.
	this.			lastIndex = 0;
	// Whether or not to search in strings across multiple lines. As of JavaScript 1.5, a property of a RegExp instance, not the RegExp object.
	this.			multiline = false;
	// The text of the pattern. As of JavaScript 1.5, a property of a RegExp instance, not the RegExp object.
	this.			source = "";
	// Executes a search for a match in its string parameter.
	this.exec = function (strOpt) {return new Array();};
	// Tests for a match in its string parameter.
	this.test = function (strOpt) {return false;};
	// Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the Object.toSource method.
	this.toSource = function () {return 0;};
	// Returns a string representing the specified object. Overrides the Object.toString method.In addition, this object inherits the watch and unwatch methods from Object.
	this.toString = function () {return "";};
};

var Object = function() {
};

var String = function(value) {
	// Reflects the length of the string.
	this.length = 0;
	// Returns the character at the specified index.
	this.  charAt = function (index) {return "";};
	// Returns a number indicating the Unicode value of the character at the given index.
	this. charCodeAt = function (indexOpt) {return 0;};
	// Combines the text of two strings and returns a new string.
	this. concat = function (string2, stringN) {return "";};
	// Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
	this. indexOf = function (searchValue, fromIndexOpt) {return 0;};
	// Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
	this. lastIndexOf = function (searchValue, fromIndexOpt) {return 0;};
	// Used to match a regular expression against a string.
	this. match = function (regexp) {};
	// Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
	this. replace = function (regexp, newSubStr) {};
	// Executes the search for a match between a regular expression and a specified string.
	this. search = function (regexp) {};
	// Extracts a section of a string and returns a new string.
	this. slice = function (beginslice, endSliceOpt) {return "";};
	// Splits a String object into an array of strings by separating the string into substrings.
	this. split = function (separatorOpt, limitOpt) {};
	// Returns the characters in a string beginning at the specified location through the specified number of characters.
	this. substr = function (start, lengthOpt) {return "";};
	// Returns the characters in a string between two indexes into the string.
	this. substring = function (indexA, indexBOpt) {return "";};
	// Returns the calling string value converted to lowercase.
	this. toLowerCase = function () {return "";};
	// Returns an object literal representing the specified object; you can use this value to create a new object. Overrides the Object.toSource method.
	this. toSource = function () {return "";};
	// Returns a string representing the specified object. Overrides the Object.toString method.
	this. toString = function () {return "";};
	// Returns the calling string value converted to uppercase.
	this. toUpperCase = function () {return "";};
	// Returns the primitive value of the specified object. Overrides the Object.valueOf method.
	this. valueOf = function () {return 0;};
	// Creates an HTML anchor that is used as a hypertext target.
	this.  anchor = function (nameAttribute) {};
	// Causes a string to be displayed in a big font as if it were in a BIG tag.
	this. big = function () {return "";};
	// Causes a string to blink as if it were in a BLINK tag.
	this. blink = function () {return "";};
	// Causes a string to be displayed as if it were in a B tag.
	this. bold = function () {return "";};
	// Causes a string to be displayed in fixed-pitch font as if it were in a TT tag.
	this. fixed = function () {return "";};
	// Causes a string to be displayed in the specified color as if it were in a <FONT COLOR="color"> tag.
	this. fontcolor = function (color) {return "";};
	// Causes a string to be displayed in the specified font size as if it were in a <FONT SIZE="size"> tag.
	this. fontsize = function (size) {return "";};
	// Causes a string to be italic, as if it were in an I tag.
	this. italics = function () {return "";};
	// Creates an HTML hypertext link that requests another URL.
	this. link = function (hrefAttribute) {return "";};
	// Causes a string to be displayed in a small font, as if it were in a SMALL tag.
	this. small = function () {return "";};
	// Causes a string to be displayed as struck-out text, as if it were in a STRIKE tag.
	this. strike = function () {return "";};
	// Causes a string to be displayed as a subscript, as if it were in a SUB tag.
	this. sub = function () {return "";};
	// Causes a string to be displayed as a superscript, as if it were in a SUP tag.
	this. sup = function () {return "";};
};


var isFinite = function (testValue) {return 0;};

var isNaN = function (testValue) {return 0;};

var parseFloat = function (string) {return 0;};

var parseInt = function (string) {return 0;};

var eval = function (string) {};

var decodeURI = function (encodedURI) {};





// DHTML & Browser API
style = {
	background : 0,
	backgroundAttachment : 0,
	backgroundColor : 0,
	backgroundImage : 0,
	backgroundPosition : 0,
	backgroundRepeat : 0,
	border : 0,
	borderBottom : 0,
	borderBottomColor : 0,
	borderBottomStyle : 0,
	borderBottomWidth : 0,
	borderColor : 0,
	borderLeft : 0,
	borderLeftColor : 0,
	borderLeftStyle : 0,
	borderLeftWidth : 0,
	borderRight : 0,
	borderRightColor : 0,
	borderRightStyle : 0,
	borderRightWidth : 0,
	borderStyle : 0,
	borderTop : 0,
	borderTopColor : 0,
	borderTopStyle : 0,
	borderTopWidth : 0,
	borderWidth : 0,
	bottom : 0,
	captionSide : 0,
	clear : 0,
	clip : 0,
	color : 0,
	cursor : 0,
	direction : 0,
	display : 0,
	emptyCells : 0,
	cssFloat : 0,
	font : 0,
	fontFamily : 0,
	fontSize : 0,
	fontStretch : 0,
	fontStyle : 0,
	fontVariant : 0,
	fontWeight : 0,
	height : 0,
	left : 0,
	letterSpacing : 0,
	lineHeight : 0,
	listStyle : 0,
	listStyleImage : 0,
	listStylePosition : 0,
	listStyleType : 0,
	margin : 0,
	marginBottom : 0,
	marginLeft : 0,
	marginRight : 0,
	marginTop : 0,
	maxHeight : 0,
	maxWidth : 0,
	minHeight : 0,
	minWidth : 0,
	noWrap : false,
	overflow : 0,
	padding : 0,
	paddingBottom : 0,
	paddingLeft : 0,
	paddingRight : 0,
	paddingTop : 0,
	pageBreakAfter : 0,
	pageBreakBefore : 0,
	position : 0,
	right : 0,
	scrollbar : 0,
	scrollbarArrowColor : 0,
	scrollbarBaseColor : 0,
	scrollbarDarkshadowColor : 0,
	scrollbarFaceColor : 0,
	scrollbarHighlightColor : 0,
	scrollbarShadowColor : 0,
	scrollbarTrackColor : 0,
	tableLayout : 0,
	textAlign : 0,
	textDecoration : 0,
	textIndent : 0,
	textTransform : 0,
	top : 0,
	verticalAlign : 0,
	visibility : 0,
	width : 0,
	wordSpacing : 0,
	zIndex : 0,
	WebkitTransform : 0,
	getAttribute : function (attribute, caseSensitive) {},
	removeAttribute : function (attribute, caseSensitive) {},
	setAttribute: function (attribute, value, caseSensitive) {},
};

option = {
	defaultSelected  : false,
	length  : 0,
	selected  : false,
	selectedIndex  : 0,
	text  : "",
	value  : 0,
};

element = {
	attributes  : [element],
	childNodes  : [element],
	data  : "",
	firstChild  : element,
	lastChild  : element,
	nextSibling  : element,
	nodeName  : "",
	nodeType  : 0,
	nodeValue  : "",
	parentNode  : element,
	previousSibling  : element,
	addEventListener : function (type, handler, useCapture) {},
	attachEvent : function (event, handler) {},
	appendChild : function (node) {},
	appendData : function (data) {},
	cloneNode : function (copyText) {},
	deleteData : function () {},
	getAttribute : function (attribute) {},
	getAttributeNode : function (attribute) { return element;},
	getElementsByTagName : function (tagname) {return [element];},
	hasChildNodes : function () {return false;},
	insertBefore : function (parentNode, childNode) {},
	insertData : function (data) {},
	removeAttribute : function (attribute) {},
	removeAttributeNode : function (node) {},
	removeChild : function (node) {},
	replaceChild : function (newNode, node) {},
	replaceData : function (data) {},
	setAttribute : function (attribute, value) {},
	setAttributeNode : function (node) {},
	querySelector : function(selectors) { return element; },
	style : style,
	options : [option],
	className  : "",
	dataFld  : "",
	dataFormatAs  : "",
	dataPageSize  : 0,
	dataSrc  : "",
	id  : "",
	innerHTML  : "",
	innerText  : "",
	isTextEdit  : false,
	lang  : "",
	language  : "",
	length  : 0,
	offsetHeight  : 0,
	offsetLeft  : 0,
	offsetParent  : element,
	offsetTop  : element,
	offsetWidth  : 0,
	outerHTML  : "",
	outerText  : "",
	parentElement  : element,
	parentTextEdit  : element,
	recordNumber  : 0,
	sourceIndex  : 0,
	tagName  : "",
	title  : "",
	value : "",
	click : function () {},
	contains : function (element) {},
	getAttribute : function (attribute, caseSensitive) {},
	insertAdjacentHTML : function (pos, code) {},
	insertAdjacentText : function (pos, text) {},
	removeAttribute : function (attribute, caseSensitive) {},
	scrollIntoView : function (showAtTop) {},
	setAttribute : function (attribute, value, caseSensitive) {},
};

layer = {
	above  : false,
	background  : "",
	bgColor  : "",
	below  : false,
	clip  : {top:0,left:0,bottom:0,right:0,width:0,height:0},
	document  : document,
	left  : 0,
	length  : 0,
	name  : "",
	pageX  : 0,
	pageY  : 0,
	parentLayer  : layer,
	siblingAbove  : layer,
	siblingBelow  : layer,
	src  : "",
	top  : 0,
	visibility  : false,
	zIndex  : 0,
	captureEvents : function (event1, eventN) {},
	handleEvent : function (event1, eventN) {},
	load : function (src, width) {},
	moveAbove : function (layer) {},
	moveBelow : function (layer) {},
	moveBy : function (x, y) {},
	moveTo : function (x, y) {},
	moveToAbsolute : function (x, y) {},
	releaseEvents : function (event1, eventN) {},
	resizeBy : function (x, y) {},
	resizeTo : function (x, y) {},
	routeEvent : function (event1, eventN) {},
};

history = {
	length : 0,
	back: function () {},
	forward: function () {},
	go: function (count) {},
};

location = {
	hash  : 0,
	host  : "",
	hostname  : "",
	href  : "",
	pathname  : "",
	port  : 0,
	protocol  : "",
	search  : "",
	reload : function () {},
	replace : function(url) {},
};

form = {
	elements : [element],
	action  : "",
	encoding  : "",
	length  : 0,
	method  : "",
	name  : "",
	target  : "",
	handleEvent  : function(event) {},
	reset  : function() {},
	submit  : function() {},
};

event = {
	altKey : false,
	ctrlKey : false,
	shiftKey  : false,
	button : false ,
	clientX : 0,
	clientY : 0 ,
	keyCode : 0 ,
	layerX : 0,
	layerY : 0 ,
	modifiers : 0 ,
	offsetX : 0,
	offsetY : 0,
	pageX : 0,
	pageY : 0,
	screenX : 0,
	screenY : 0,
	which  : false,
	type : 0,
	x : 0,
	y : 0,
};

plugin = {
	description : "",
	filename : "",
	length : 0,
	name : "",
};

mimeType = {
	description : "",
	enabledPlugin : "",
	length : 0,
	suffixes : "",
	type : "",
};

anchor = {
	name : "",
	length : 0,
	text : 0,
	x : 0,
	y : 0,
};

image = {
	border  : 0,
	complete  : false,
	height  : 0,
	hspace  : 0,
	length  : 0,
	lowsrc  : "",
	name  : "",
	src  : "",
	vspace  : 0,
	width  : 0,
	handleEvent : function(event) {},
};

link = {
	name  : "",
	length  : 0,
	target  : "",
	text  : "",
	x  : 0,
	y : 0,
};

embed = {
	height  : 0,
	hspace  : 0,
	length  : 0,
	name  : "",
	src  : "",
	width  : 0,
	type  : 0,
	vspace  : 0,
	play : function() {},
	stop : function() {},
};

var document =
{
	compatMode : false,
	showimage : "",
	code : "",
	body : "",
	alinkColor  : "",
	bgColor  : "",
	charset  : "",
	cookie  : "",
	defaultCharset  : "",
	fgColor  : "",
	lastModified  : "",
	linkColor  : "",
	referrer  : "",
	title  : "",
	URL  : "",
	vlinkColor  : "",
	forms : [form],
	all : function (tagname) { return [element];},
	layers : [layer],
	embeds : [embed],
	anchors : [anchor],
	applets : new Array(),
	images : [image],
	links : [link],
	captureEvents : function (event1, eventN) {},
	close : function () {},
	createAttribute : function (attribute) {},
	createElement : function (element) {},
	createTextNode : function (text) {},
	getElementById : function (id) { return element; },
	getElementsByName : function (name) {return [element];},
	getElementsByTagName : function (tagname) {return [element];},
	getSelection : function () {},
	handleEvent : function (event) {},
	open : function (mimetypeOpt, replaceOpt) {},
	releaseEvents : function (event1, eventN) {},
	routeEvent : function (event1, eventN) {},
	write : function (text) {},
	writeln : function (text) {},
	addEventListener : function (type, handler, useCapture) {},
	createEvent : function(type) { return event; },
	querySelector : function(selectors) { return element; },
};

var console = 
{
	log : function(msg) {},
	error : function(msg) {},
	info : function(msg) {},
	warn : function(msg) {},
};

var screen =
{
	width : 0,
	height : 0,
	availHeight : 0,
	availWidth : 0,
	colorDepth : 0,
	pixelDepth : 0,
};

var closed = false;
var defaultStatus = "";
var innerHeight = 0;
var innerWidth = 0;
var name = "";
var outerHeight = 0;
var outerWidth = 0;
var pageXOffset = 0;
var pageYOffset = 0;
var status = "";
var locationbar = {visible:false};
var menubar = {visible:false};
var personalbar = {visible:false};
var scrollbars = {visible:false};
var statusbar = {visible:false};
var toolbar = {visible:false};
function alert (message) {};
function back () {};
function blur () {};
function captureEvents (event1, eventN) {};
function clearInterval (interval) {};
function clearTimeout () {timeout};
function close () {};
function confirm (message) { return false; };
function disableExternalCapture () {};
function enableExternalCapture () {};
function find (text, caseSensitive, backwards) {};
function focus () {};
function forward () {};
function handleEvent (event) {};
function home () {};
function moveBy (x, y) {};
function moveTo (x, y) {};
function open (url, target, options) {};
function print () {};
function prompt (message, defaultValue) {};
function releaseEvents (event1, eventN) {};
function resizeBy (x, y) {};
function resizeTo (x, y) {};
function routeEvent (event) {};
function scrollBy (x, y) {};
function scrollTo (x, y) {};
function setInterval (code, pause) {};
function setTimeout (code, pause) {};
function stop () {};

function dump (message) {};

var window =
{
	frames : 0,
	top : 0,
	closed  : closed ,
	defaultStatus  : defaultStatus ,
	innerHeight  : innerHeight ,
	innerWidth  : innerWidth ,
	locationbar  : locationbar ,
	menubar  : menubar ,
	name  : name ,
	outerHeight  : outerHeight ,
	outerWidth  : outerWidth ,
	pageXOffset  : pageXOffset ,
	pageYOffset  : pageYOffset ,
	personalbar  : personalbar ,
	scrollbars  : scrollbars ,
	statusbar  : statusbar ,
	status  : status ,
	toolbar  : toolbar ,
	document : document,
	event : event,
	history : history,
	location : location,
	alert : alert,
	back : back,
	blur : blur,
	captureEvents : captureEvents,
	clearInterval : clearInterval,
	clearTimeout : clearTimeout,
	close : close,
	confirm : confirm,
	disableExternalCapture : disableExternalCapture,
	enableExternalCapture : enableExternalCapture,
	find : find,
	focus : focus,
	forward : forward,
	handleEvent : handleEvent,
	home : home,
	moveBy : moveBy,
	moveTo : moveTo,
	open : open,
	print : print,
	prompt : prompt,
	releaseEvents : releaseEvents,
	resizeBy : resizeBy,
	resizeTo : resizeTo,
	routeEvent : routeEvent,
	scrollBy : scrollBy,
	scrollTo : scrollTo,
	setInterval : setInterval,
	setTimeout : setTimeout,
	stop : stop,
	openDatabase : function(database_name, database_version, database_displayname, database_size) { return Database; }, // PhoneGap
	localStorage : Storage, // PhoneGap
};

var device =
{
	platform : "",
	version : "",
	uuid : "",
	name : "",
	model : "", // PhoneGap
	cordova : "", // PhoneGap
	capture : Capture, // PhoneGap
};

var navigator =
{
	appCodeName  : "",
	appName  : "",
	appVersion  : "",
	cookieEnabled  : false,
	language  : "",
	platform  : "",
	userAgent  : "",
	device : device,
	mimeTypes : [mimeType],
	plugins : [plugin],
	javaEnabled : function() {return false;},
	accelerometer : Accelerometer, // PhoneGap
	camera : Camera, // PhoneGap
	connection : Connection, // PhoneGap
	contacts : Contacts, // PhoneGap
	compass : Compass, // PhoneGap
	geolocation : Geolocation, // PhoneGap
	globalization : Globalization, // PhoneGap
	notification : Notification, // PhoneGap
	splashscreen : Splashscreen, // PhoneGap
};


// AJAX API
var XMLHttpRequest = function() {
	this.readyState = 0;
	this.status = 0;
	this.statusText = "";
	this.responseText = "";
	this.responseXML = document;
	this.open = function (requestMethod, url, asynchronousFlag, usernameOpt, passwordOpt) {};
	this.send = function (bodyContent) {};
	this.abort = function () {};
	this.overrideMimeType = function (type) {};
	this.setRequestHeader = function (headerField, headerValue) {};
	this.getAllResponseHeaders = new function() {return "";};
	this.getResponseHeader = function (headerField) {};
	this.getResponseHeader = function (h) {};
	this.onreadystatechange = null;
	this.onreadystatechange({target:{myData:"",responseText:""}});
};


// jQuery API
var $ = function(x)
{
	return jQuery;
};

jQuery =
{
	// AJAX
    ajaxComplete : function(handler) { return jQuery; },
    ajaxError : function(handler) { return jQuery; },
    ajaxSend : function(handler) { return jQuery; },
    ajaxStart : function(handler) { return jQuery; },
    ajaxStop : function(handler) { return jQuery; },
    ajaxSuccess : function(handler) { return jQuery; },

    load : function(url, data, complete) { return jQuery; },

    // Attributes
    addClass : function(classNames) { return jQuery; },
    addClass : function(func) { return jQuery; },

    // http://api.jquery.com/addBack/
    addBack : function(selector) { return jQuery; },

    attr : function(attributeName) { return jQuery; },
    attr : function(attributeName, func) { return jQuery; },

    hasClass : function(className) { return false; },

    html : function() { return ""; },
    html : function(htmlString) { return jQuery; },

    prop : function(propertyName) { return jQuery; },
    prop : function(propertyName, value) { return jQuery; },
    prop : function(propertyName, func) { return jQuery; },

    removeAttr : function(attributeName) { return jQuery; },

    removeClass : function(className) { return jQuery; },

    removeProp : function(propertyName) { return jQuery; },

    toggleClass : function(className, swtch) { return jQuery; },
    toggleClass : function(swtch) { return jQuery; },

    val : function() { return null; },
    val : function(value) { return jQuery; },

    // CSS
    css : function(propertyName) { return ""; },
    css : function(propertyNames) { return ""; },
    css : function(properties) { return jQuery; },
    css : function(propertyName, value) { return jQuery; },

    height : function() { return 0; },
    height : function(value) { return jQuery; },

    innerHeight : function() { return 0; },
    innerWidth : function() { return 0; },

    offset : function() { return { left : 0, top : 0, } },
    offset : function(coordinates) { return jQuery; },

    outerHeight : function(includeMargin) { return 0; },
    outerWidth : function(includeMargin) { return 0; },

    position : function() { return { left : 0, top : 0, } },

    scrollLeft : function() { return 0; },
    scrollLeft : function(value) { return jQuery; },

    scrollTop : function() { return 0; },
    scrollTop : function(value) { return jQuery; },

    width : function() { return 0; },
    width : function(value) { return jQuery; },

    // Effects
    animate : function(properties, duration, complete) { return jQuery; },
    animate : function(properties, duration, easing, complete) { return jQuery; },

    delay : function(duration, queueName) { return jQuery; },

    fadeIn : function(duration, callback) { return jQuery; },
    fadeIn : function(duration, easing, callback) { return jQuery; },

    fadeOut : function(duration, callback) { return jQuery; },
    fadeOut : function(duration, easing, callback) { return jQuery; },

    fadeTo : function(duration, opacity, callback) { return jQuery; },
    fadeTo : function(duration, opacity, easing, callback) { return jQuery; },

    fadeToggle : function(duration, callback) { return jQuery; },
    fadeToggle : function(duration, easing, callback) { return jQuery; },

    finish : function() { return jQuery; },

    hide : function(duration, callback) { return jQuery; },
    hide : function(duration, easing, callback) { return jQuery; },

    show : function(duration, callback) { return jQuery; },
    show : function(duration, easing, callback) { return jQuery; },

    slideDown : function(duration, callback) { return jQuery; },
    slideDown : function(duration, easing, callback) { return jQuery; },

    slideToggle : function(duration, callback) { return jQuery; },
    slideToggle : function(duration, easing, callback) { return jQuery; },

    slideUp : function(duration, callback) { return jQuery; },
    slideUp : function(duration, easing, callback) { return jQuery; },

    stop : function(clearQueue, jumpToEnd) { return jQuery; },
    stop : function(queue, clearQueue, jumpToEnd) { return jQuery; },

    toggle : function(duration, callback) { return jQuery; },
    toggle : function(duration, easing, callback) { return jQuery; },
    toggle : function(showOrHide) { return jQuery; },

    // Events
    bind : function(eventType, eventData, handler) { return jQuery; },
    bind : function(eventType, eventData, preventBubble) { return jQuery; },
    bind : function(eventType, preventBubble) { return jQuery; },

    blur : function(eventData, handler) { return jQuery; },
    blur : function(handler) { return jQuery; },

    change : function(eventData, handler) { return jQuery; },
    change : function(handler) { return jQuery; },

    click : function(eventData, handler) { return jQuery; },
    click : function(handler) { return jQuery; },

    dblclick : function(eventData, handler) { return jQuery; },
    dblclick : function(handler) { return jQuery; },

    delegate : function(selector, eventType, handler) { return jQuery; },

    focus : function(eventData, handler) { return jQuery; },
    focus : function(handler) { return jQuery; },

    focusin : function(eventData, handler) { return jQuery; },
    focusin : function(handler) { return jQuery; },

    focusout : function(eventData, handler) { return jQuery; },
    focusout : function(handler) { return jQuery; },

    hover : function(handlerIn, handlerOut) { return jQuery; },
    hover : function(handlerInOut) { return jQuery; },

    keydown : function(eventData, handler) { return jQuery; },
    keydown : function(handler) { return jQuery; },

    keypress : function(eventData, handler) { return jQuery; },
    keypress : function(handler) { return jQuery; },

    keyup : function(eventData, handler) { return jQuery; },
    keyup : function(handler) { return jQuery; },

    load : function(eventData, handler) { return jQuery; },
    load : function(handler) { return jQuery; },

    mousedown : function() { return jQuery; },
    mousedown : function(eventData, handler) { return jQuery; },
    mousedown : function(handler) { return jQuery; },

    mouseevent : function(eventData, handler) { return jQuery; },
    mouseevent : function(handler) { return jQuery; },

    mouseenter : function() { return jQuery; },
    mouseenter : function(eventData, handler) { return jQuery; },
    mouseenter : function(handler) { return jQuery; },

    mouseleave : function() { return jQuery; },
    mouseleave : function(eventData, handler) { return jQuery; },
    mouseleave : function(handler) { return jQuery; },

    mousemove : function() { return jQuery; },
    mousemove : function(eventData, handler) { return jQuery; },
    mousemove : function(handler) { return jQuery; },

    mouseout : function() { return jQuery; },
    mouseout : function(eventData, handler) { return jQuery; },
    mouseout : function(handler) { return jQuery; },

    mouseover : function() { return jQuery; },
    mouseover : function(eventData, handler) { return jQuery; },
    mouseover : function(handler) { return jQuery; },

    mouseup : function() { return jQuery; },
    mouseup : function(eventData, handler) { return jQuery; },
    mouseup : function(handler) { return jQuery; },

    off : function(events, selector, handler) { return jQuery; },
    off : function(eventsMap, selector) { return jQuery; },

    on : function(events, selector, data, handler) { return jQuery; },
    on : function(events, selector, handler) { return jQuery; },
    on : function(eventsMap, selector, data) { return jQuery; },

    one : function(events, selector, data, handler) { return jQuery; },
    one : function(eventsMap, selector, data) { return jQuery; },

    ready : function(handler) { return jQuery; },

    resize : function(eventData, handler) { return jQuery; },
    resize : function(handler) { return jQuery; },

    scroll : function(eventData, handler) { return jQuery; },
    scroll : function(handler) { return jQuery; },

    select : function(eventData, handler) { return jQuery; },
    select : function(handler) { return jQuery; },

    submit : function(eventData, handler) { return jQuery; },
    submit : function(handler) { return jQuery; },

    trigger : function(event) { return jQuery; },

    unbind : function(eventType, handler) { return jQuery; },
    unbind : function(eventType, fls) { return jQuery; },
    unbind : function(evt) { return jQuery; },

    undelegate : function() { return jQuery; },
    undelegate : function(selector, eventType, handler) { return jQuery; },
    undelegate : function(selector, events) { return jQuery; },
    undelegate : function(namespace) { return jQuery; },

    unload : function(eventData, handler) { return jQuery; },
    unload : function(handler) { return jQuery; },

    // Manipulation
    after : function(content) { return jQuery; },

    append : function(content) { return jQuery; },

    appendTo : function(target) { return jQuery; },

    before : function(content) { return jQuery; },

    clone : function(withDataAndEvents, deepWithDataAndEvents) { return jQuery; },

    detach : function(selector) { return jQuery; },

    empty : function() { return jQuery; },

    insertAfter : function(target) { return jQuery; },
    insertBefore : function(target) { return jQuery; },

    prepend : function(content) { return jQuery; },

    prependTo : function(target) { return jQuery; },

    remove : function(selector) { return jQuery; },

    replaceAll : function(target) { return jQuery; },

    replaceWith : function(func) { return jQuery; },

    text : function() { return ""; },
    text : function(textString) { return jQuery; },

    toArray : function() { return null; },

    unwrap : function() { return jQuery; },

    wrap : function(wrappingElement) { return jQuery; },

    wrapAll : function(wrappingElement) { return jQuery; },

    wrapInner : function(wrappingElement) { return jQuery; },

    // Miscellaneous
    each : function(func) { return jQuery; },

    get : function(index) { return null; },

    index : function() { return 0; },
    index : function(selector) { return 0; },
    index : function(element) { return 0; },

    // Traversing
    add : function(selector, context) { return jQuery; },
    add : function(obj) { return jQuery; },

    children : function(selector) { return jQuery; },

    closest : function(selector) { return jQuery; },
    closest : function(selector, context) { return jQuery; },

    contents : function() { return jQuery; },

    end : function() { return jQuery; },

    eq : function(index) { return jQuery; },

    filter : function(selector) { return jQuery; },

    find : function(selector) { return jQuery; },

    first : function() { return jQuery; },

    has : function(selector) { return jQuery; },

    is : function(selector) { return false; },

    last : function() { return jQuery; },

    map : function(callback) { return jQuery; },

    next : function(selector) { return jQuery; },

    nextAll : function(selector) { return jQuery; },

    nextUntil : function(selector, filter) { return jQuery; },

    not : function(selector) { return jQuery; },

    offsetParent : function() { return jQuery; },

    parent : function(selector) { return jQuery; },

    parents : function(selector) { return jQuery; },

    parentsUntil : function(selector, filter) { return jQuery; },

    prev : function(selector) { return jQuery; },

    prevAll : function(selector) { return jQuery; },

    prevUntil : function(selector, filter) { return jQuery; },

    siblings : function(selector) { return jQuery; },

    slice : function(start, end) { return jQuery; },
};


// PhoneGap API
var Acceleration = function()
{
	this.x = 0; 
	this.y = 0; 
	this.z = 0;
	this.timestamp = 0;
};

Accelerometer =
{
	getCurrentAcceleration : function(accelerometerSuccess, accelerometerError)
	{
		accelerometerSuccess(new Acceleration());
	},
	watchAcceleration : function(accelerometerSuccess, accelerometerError, accelerometerOptions)
	{
		accelerometerSuccess(new Acceleration());
		return "";
	},
	clearWatch : function(watchId) {},
};

var Camera = 
{
	getPicture : function ( cameraSuccess, cameraError, cameraOptions ) {},
	cleanup : function ( cameraSuccess, cameraError ) {},
	PopoverArrowDirection : 
	{
        ARROW_UP : 1, 
        ARROW_DOWN : 2,
        ARROW_LEFT : 4,
        ARROW_RIGHT : 8,
        ARROW_ANY : 15
    },
    Direction = 
    {
	    BACK : 0,           // Use the back-facing camera
	    FRONT : 1           // Use the front-facing camera
	},
	MediaType = 
	{
	    PICTURE: 0,             // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
	    VIDEO: 1,               // allow selection of video only, WILL ALWAYS RETURN FILE_URI
	    ALLMEDIA : 2 
    },
    EncodingType = 
    {
	    JPEG : 0,               // Return JPEG encoded image
	    PNG : 1                 // Return PNG encoded image
	},
	PictureSourceType = 
	{
	    PHOTOLIBRARY : 0,
	    CAMERA : 1,
	    SAVEDPHOTOALBUM : 2
	},
	DestinationType = 
	{
	    DATA_URL : 0,                // Return image as base64 encoded string
	    FILE_URI : 1,                // Return image file URI
	    NATIVE_URI : 2               // Return image native URI (eg. assets-library:// on iOS or content:// on Android)
	}
};

var Connection =
{
	type : 0,
	UNKNOWN : 0,
	ETHERNET : 0,
	WIFI : 0,
	CELL_2G : 0,
	CELL_3G : 0,
	CELL_4G : 0,
	CELL : 0,
	NONE : 0,
};

var CompassError =
{
	code : 0,
	COMPASS_INTERNAL_ERR : 0,
	COMPASS_NOT_SUPPORTED : 0,
};

var CompassHeading = function()
{
	this.magneticHeading = 0; // The heading in degrees from 0 - 359.99 at a single moment in time. (Number)
	this.trueHeading = 0; // The heading relative to the geographic North Pole in degrees 0 - 359.99 at a single moment in time. A negative value indicates that the true heading could not be determined. (Number)
	this.headingAccuracy = 0; // The deviation in degrees between the reported heading and the true heading. (Number)
	this.timestamp = 0; // The time at which this heading was determined. (milliseconds)
};

Compass =
{
	getCurrentHeading : function(compassSuccess, compassError, compassOptions)
	{
		compassSuccess(new CompassHeading());
		compassError(CompassError);
	},
	watchHeading : function(compassSuccess, compassError, compassOptions)
	{
		compassSuccess(new CompassHeading());
		compassError(CompassError);
		return "";
	},
	clearWatch : function(watchID) {},
};

var ContactName = function()
{
	this.formatted = ""; // The complete name of the contact. (DOMString)
	this.familyName = ""; // The contacts family name. (DOMString)
	this.givenName = ""; // The contacts given name. (DOMString)
	this.middleName = ""; // The contacts middle name. (DOMString)
	this.honorificPrefix = ""; // The contacts prefix (example Mr. or Dr.) (DOMString)
	this.honorificSuffix = ""; // The contacts suffix (example Esq.). (DOMString)
};

var ContactOrganization = function()
{
	this.pref = false; // Set to true if this ContactOrganization contains the user's preferred value. (boolean)
	this.type = ""; // A string that tells you what type of field this is (example: 'home'). _(DOMString)
	this.name = ""; // The name of the organization. (DOMString)
	this.department = ""; // The department the contract works for. (DOMString)
	this.title = ""; // The contacts title at the organization. (DOMString)
};

var ContactField = function(type, value, pref)
{
	this.type = type; // A string that tells you what type of field this is (example: 'home'). (DOMString)
	this.value = value; // The value of the field (such as a phone number or email address). (DOMString)
	this.pref = pref; // Set to true if this ContactField contains the user's preferred value. (boolean)
};

var ContactAddress = function()
{
	this.pref = false; // Set to true if this ContactAddress contains the user's preferred value. (boolean)
	this.type = ""; // A string that tells you what type of field this is (example: 'home'). _(DOMString)
	this.formatted = ""; // The full address formatted for display. (DOMString)
	this.streetAddress = ""; // The full street address. (DOMString)
	this.locality = ""; // The city or locality. (DOMString)
	this.region = ""; // The state or region. (DOMString)
	this.postalCode = ""; // The zip code or postal code. (DOMString)
	this.country = ""; // The country name. (DOMString)
};

ContactError = 
{
	code: 0,
	UNKNOWN_ERROR: 0,
	INVALID_ARGUMENT_ERROR: 0,
	TIMEOUT_ERROR: 0,
	PENDING_OPERATION_ERROR: 0,
	IO_ERROR: 0,
	NOT_SUPPORTED_ERROR: 0,
	PERMISSION_DENIED_ERROR: 0,
};

Contact =
{
	id: "", // A globally unique identifier. (DOMString)
	displayName: "", // The name of this Contact, suitable for display to end-users. (DOMString)
	name: new ContactName(), // An object containing all components of a persons name. (ContactName)
	nickname: "", // A casual name to address the contact by. (DOMString)
	phoneNumbers: [new ContactField()], // An array of all the contact's phone numbers. (ContactField[])
	emails: [new ContactField()], // An array of all the contact's email addresses. (ContactField[])
	addresses: [new ContactAddress()], // An array of all the contact's addresses. (ContactAddress[])
	ims: [new ContactField()], // An array of all the contact's IM addresses. (ContactField[])
	organizations: [new ContactOrganization()], // An array of all the contact's organizations. (ContactOrganization[])
	birthday: new Date(), // The birthday of the contact. (Date)
	note: "", // A note about the contact. (DOMString)
	photos: [new ContactField()], // An array of the contact's photos. (ContactField[])
	categories: [new ContactField()], // An array of all the contacts user defined categories. (ContactField[])
	urls: [new ContactField()], // An array of web pages associated to the contact. (ContactField[])
	clone: function() 
	{ 
		return Contact; 
	},
	remove: function(errorCallback) 
	{ 
		errorCallback(new ContactError()); 
	},
	save: function(successCallback, errorCallback) 
	{ 
		successCallback(Contact);
		errorCallback(ContactError); 
	},
};

var ContactFindOptions = function()
{
	this.filter = "";
	this.multiple = false;
};

Contacts =
{
	create : function(properties) 
	{ 
		return Contact; 
	},
	find : function(contactFields, successCallback, errorCallback, contactFindOptions)
	{
		successCallback([Contact]);
		errorCallback(ContactError);
	},
};

Capture = 
{
};

var SQLError =
{
	code : 0,
	UNKNOWN_ERR : 0,
	DATABASE_ERR : 0,
	VERSION_ERR : 0,
	TOO_LARGE_ERR : 0,
	QUOTA_ERR : 0,
	SYNTAX_ERR : 0,
	CONSTRAINT_ERR : 0,
	TIMEOUT_ERR : 0,
};

var SQLResultSetRow = function()
{
	this.id = 0;
	this.data = 0;
};

var SQLResultSetRowList = function()
{
	this.length = 0;
	this.item = function(i) { return new SQLResultSetRow(); };
};

var SQLResultSet = function()
{
	this.insertId = 0;
	this.rowsAffected = 0;
	this.rows = new SQLResultSetRowList();
};

var SQLTransaction = function()
{
	this.executeSql = function(sql, data, successCallback, errorCallback) 
	{
		successCallback(new SQLTransaction(), new SQLResultSet());
		errorCallback(SQLError);
	};
};

Database =
{
	transaction : function(populateCallback, errorCallback, successCallback)
	{
		populateCallback(new SQLTransaction());
		errorCallback(SQLError);
	}
};

var Coordinates = function()
{
	this.latitude = 0;
	this.longitude = 0;
	this.altitude = 0;
	this.speed = 0;
	this.heading = 0;
	this.accuracy = 0;
	this.altitudeAccuracy = 0;
};

var Position = function()
{
	this.cords = new Coordinates();
	this.timestamp = 0;
};

var PositionError =
{
	code : 0,
	message : "",
	PERMISSION_DENIED : 0,
	POSITION_UNAVAILABLE : 0,
	TIMEOUT : 0,
}

Geolocation =
{
	getCurrentPosition : function(geolocationSuccess, geolocationError,  geolocationOptions)
    {
		geolocationSuccess(new Position());
		geolocationError(PositionError);
    },
	watchPosition : function(geolocationSuccess, geolocationError,  geolocationOptions)
	{
		geolocationSuccess(new Position());
		geolocationError(PositionError);
		return "";
	},
	clearWatch : function(watchID) {}
    
};

Globalization =
{
};

Notification =
{
	alert : function(message, alertCallback, title, buttonName) {},
	confirm : function(message, alertCallback, title, buttonName) {},
	prompt : function(message, promptCallback, title, buttonLabels, defaultText) {},
	beep: function(times) {},
	vibrate : function(milliseconds) {},
}

Storage =
{
	key : function(i) { return ""; },
	getItem : function(key) {},
	removeItem : function(key) {},
	setItem : function(key, value) {},
	clear : function() {},
};

Splashscreen =
{
	show : function() {},
	hide : function() {},
};

