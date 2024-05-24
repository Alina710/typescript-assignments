// lower case
let personName: string ="Syedaalina"
console.log("lowercase:", personName.toLowerCase());

//upercase
console.log("uppercase:", personName.toLocaleUpperCase());
  
//title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));