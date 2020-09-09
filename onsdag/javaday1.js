//Observe: no return type, no type on parameters
//1
function add(n1, n2){
    try{
        return n1 +n2;
    }catch (e) {
        if(typeof n1 === "number"){
            console.log("you did not put n1 as number in method")

        }
        if(typeof n2 === "number"){
            console.log("you did not put n2 as number in method")
        }
    }
}

var sub = function(n1,n2){
    try{
        return n1 -n2;
    }catch (e) {
        if(typeof n1 != "number"){
            console.log("you did not put n1 as number in method")

        }
        if(typeof n2 != "number"){
            console.log("you did not put n2 as number in method")
        }
    }
}
//4
var mul= function(n1,n2){
    try{
        return n1 *n2;
    }catch (e) {
        if(typeof n1 != "number"){
            console.log("you did not put n1 as number in method")

        }
        if(typeof n2 != "number"){
            console.log("you did not put n2 as number in method")
        }
    }
}

//Callback example
var cb = function(n1,n2, callback) {
    try{
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);

    }catch(e) {
        if (typeof callback === "function") {

        } else {
            console.log("shit not a callback my brather")
        }
    }
};
//2
console.log( add(1,2) )     // prints the numbers combined
console.log( add )          // it prints the add method
console.log( add(1,2,3) ) ; // it does the same and ignores the last param
console.log( add(1) );	  // prints nothing needs a param more to work
console.log( cb(3,3,add) ); // It prints "Result from the two numbers: 3+3=6"
console.log( cb(4,3,sub) ); // "Result from the two numbers: 4+3=1"

console.log(cb(3,3,add())); // What will it print (and what was the problem) there was ()
console.log(cb(3,"hh",add));// What will it print "Result from the two numbers: 3+hh=3hh"
//4
console.log( cb(4,3,mul) );

//5
console.log(cb(4,3, function divide(n1,n2){return (n1/n2);}));

//                            <CALLBACKS with map filter and foreach>
//1
var array1= ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const res = array1.filter(name => name.length <= 3);
array1.forEach(name => console.log(name));
res.forEach(name => console.log(name));

//2
var uppercase1 = res.map(x => x.toUpperCase() );

//3
var str = '<ul>'
var str=res.map(x => "<li>"+x+"<li>" );
str += '</ul>';




//4
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var newFil = cars.filter(function (car) {
//    Cars newer than 1999
//    Al  Volvo’s
//    All cars with a price below 5000
    return car.price <= 1000 &&
        car.year > 1999 &&
        car.model ==="Volvo" &&
        car.price < 5000;
});
console.log(newFil);

//4a

var sql=cars.map(x => "INSERT INTO cars (id,year,make,model,price) VALUES ( "+x.id+", "+ x.year+", "+ x.make+", "+x.model+", "+ x.price+")");

console.log(sql);
var strrriiiing =sql.join(",");
//AC
var msgPrinter = function(msg,delay){
    setTimeout(function(){
        console.log(msg);
    },delay);
};

//1
console.log("aaaaaaaaaa");
//4
msgPrinter ("bbbbbbbbbb",2000);
//2
console.log("dddddddddd");
//3
msgPrinter ("eeeeeeeeee",1000);
//0
console.log("ffffffffff");

//1 this and constructor functions
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //it can see the name from inside the method
  },2000);
}
console.log(Person("matti"))

//That was silly. How do we use a function starting with a capitalized letter?, and what do we call such a function?
//constructer function

//var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
//console.log("I'm global: "+ name);  //What’s different ?

