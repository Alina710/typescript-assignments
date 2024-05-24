// lower case
var personName = "Syedaalina";
console.log("lowercase:", personName.toLowerCase());
//upercase
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
