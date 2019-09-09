var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("1:aaaaaaaaaa");
msgPrinter ("5:bbbbbbbbbb",2000);
console.log("2:dddddddddd");
msgPrinter ("4:eeeeeeeeee",1000);
console.log("3:ffffffffff");

function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ?

console.log('Greeter example:')

var greeter = function(){
  console.log(this.message);
};

var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
