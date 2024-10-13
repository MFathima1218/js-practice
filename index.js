// switch statement

let day='tuesday'
switch(day ){
case 'monday':
   console.log("7am");
   break;
case 'tuesday':
console.log("8am");
break;
case 'wed':
   console.log("7am");
   break;
   case 'thu':
   console.log("7am");
   break;
   case 'friday':
   console.log("7am");
   break;

}
// function ex.

function print(){
   console.log( 'hey girl')
}
print()
// ^calling/invoking a functiom

function salam( name){
   console.log("assalamualikum" + name);

   }
salam(" brother")
salam(" sister")

// return statement

function sum(a,b){
  var c=a+b;
  return c;
}
var res=sum(3,2);
console.log(res);


// subtraction

function sub(a,b) {
   var c= a-b;
   return c;

}
var res=sub(3, 2);
console.log(res);

// anonymous function

var intro= function(){
   console.log('my name is muskan')
}
intro();

setTimeout(function(){
   console.log('execute later after 1 sec')
}, 1000);