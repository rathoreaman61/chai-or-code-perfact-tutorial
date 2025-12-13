//convertion operation in javascript

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ String to Number /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//If the string contains numeric characters only, it will be converted to the corresponding number.
//If the string contains non-numeric characters, the result will be NaN (Not a Number). 

let a = '3abn2';
let valueinumber = Number(a)
console.log(valueinumber);
console.log(typeof valueinumber);

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Number to String /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//You can use the String() function or the toString() method to convert a number to a string.
//Both methods will give you the same result.
let b = "33"
let valueINstring = String(b)
console.log(valueINstring);
String(valueINstring);
console.log(typeof valueINstring);


//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ String to boolean & boolean to number & boolean to string/¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//
//In JavaScript, when converting a string to a boolean, any non-empty string is considered true, while an empty string ("") is considered false.
//When converting a boolean to a number, false is converted to 0 and true is converted to 1.
//When converting a boolean to a string, false becomes "false" and true becomes "true".

let c = "Aman"
let valueInboolean = Boolean(c)
console.log(valueInboolean);
String(valueInboolean);
console.log(typeof valueInboolean);

let d = true;//fulse than 0 or true than 1
let booleanToString = Number(d)
console.log(booleanToString);
console.log(typeof booleanToString);

//note:js have totally 7 falsy values: 0, null, undefined, NaN, "", false,document.all

let e = false;
let booleanToString1 = String(e)
console.log(booleanToString1);//print false
console.log(typeof booleanToString1);

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Null to Number & Undefined to Number /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//

//When converting null to a number, it results in 0.
//When converting undefined to a number, it results in NaN (Not a Number).
let f = null;
let nullToNumber = Number(f)
console.log(nullToNumber);//print 0
console.log(typeof nullToNumber);

let g = undefined;
let undefinedToNumber = Number(g)
console.log(undefinedToNumber);//print NaN
console.log(typeof undefinedToNumber);          
//NaN means Not a Number    

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Null to String & Undefined to String /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//

//When converting null to a string, it results in the string "null".
//When converting undefined to a string, it results in the string "undefined".
let h = null;
let nullToString = String(h)
console.log(nullToString);//print null
console.log(typeof nullToString);

let i = undefined;
let undefinedToString = String(i)
console.log(undefinedToString);//print undefined
console.log(typeof undefinedToString);

//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯/ Null to Boolean & Undefined to Boolean /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//

//When converting null to a boolean, it results in false.
//When converting undefined to a boolean, it also results in false.
let j = null;
let nullToBoolean = Boolean(j)
console.log(nullToBoolean);//print false
console.log(typeof nullToBoolean);

let k = undefined;
let undefinedToBoolean = Boolean(k)
console.log(undefinedToBoolean);//print false
console.log(typeof undefinedToBoolean); 

////the End////