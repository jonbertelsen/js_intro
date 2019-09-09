//Observe: no return type, no type on parameters
function add(n1, n2){

        if (typeof n1 !== "number" || typeof n1 === "undefined")
            throw new Error('Whoops! n1 is not a number')
        else
            if (typeof n2 !== "number" || typeof n2 === "undefined")
                throw new Error('Whoops! n2 is not a number')
        else
                   return n1 + n2
}
    
var sub = function(n1,n2){
    
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            throw new Error('Whoops! n1 is not a number')
        else
            if (typeof n2 !== "number" || typeof n2 === "undefined")
                throw new Error('Whoops! n2 is not a number')
            else
                   return n1 - n2     
} 

var mul = function(n1,n2){
    
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            throw new Error('Whoops! n1 is not a number')
        else
            if (typeof n2 !== "number" || typeof n2 === "undefined")
                throw new Error('Whoops! n2 is not a number')
            else
                   return n1 * n2
           }

var cb = function(n1,n2, callback){
  
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            throw new Error('Whoops! n1 is not a number')
        else
            if (typeof n2 !== "number" || typeof n2 === "undefined")
                throw new Error('Whoops! n2 is not a number')
            else
                if (typeof callback !== "function" || typeof callback === "undefined")
                    throw new Error('Whoops! The callback is not a function')
                else
                    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
 
  
};

try {
console.log('1: ' + add(1,2) )     // What will this print?
} catch (e){
    console.log(e.name + ': ' + e.message)
}
try {
console.log('2: ' +  add )          // What will it print and what does add represent?
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
console.log('3: ' +  add(1,2,3) ) ; // What will it print
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
    console.log('4: ' +  add(1) );	  // What will it print 
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
console.log('5: ' +  cb(3,3,add) ); // What will it print
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
console.log('6: ' +  cb(4,2,sub) ); // What will it print
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
console.log('7: ' +  cb(3,3,add())); // What will it print (and what was the problem)
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
console.log('8: ' + cb(3,"hh",add));// What will it print
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
console.log('9: ' + cb(3,6,mul));// What will it print
} catch (e){
    console.log(e.name + ': ' + e.message)
}

try {
console.log('9: ' + cb(3,6,(x,y)=>x/y));// What will it print
} catch (e){
    console.log(e.name + ': ' + e.message)
}


console.log('Udskriv alle navne:')
var nameArray1 = ["Lars", "Peter", "Jan", "Ian"]
console.log(nameArray1.join(","))

console.log('Udskriv navne med højest 3 bogstaver:')
var filteredNameArray = nameArray1.filter(x=>x.length<=3)
filteredNameArray.forEach(x=>console.log(x))
console.log('Eller på streg:')
console.log(filteredNameArray.join(","))

