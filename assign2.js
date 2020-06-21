// ch 21 -25
// Question 1

// var a=prompt();
// var b=prompt();
// var fullName=a +" "+ b;
// alert(fullName);

// Question 2
// var a=prompt("favorite mobile phone model")
// alert("length of user input is "+ a.length);

// Question 3
// var a="Pakistani";
// alert("index of n is "+a.indexOf("n"));

// Question 4
//  var a="Hello World";
// alert("index of n is "+a.lastIndexOf("l"));

// Question 5
//   var a="Pakistani";
//  alert("Character at index 3 "+a.charAt(3));

// Question 6
//  var a=prompt();
//  var b=prompt();
// alert(a.concat(b));

// Question 7
// a="hyderabad"
// alert(a.replace("hyder","Islam"))

// Question 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// alert(message.replaceAll("and","&"));

// Question 9
// var a="472"
// alert(typeof a );

// var b=parseInt(a)
// alert(typeof b );

// Question 10

// var a="peanunt";
// alert(a.toUpperCase())

// Question 11

// var a= prompt("User input")
// var c =a.replace(a.charAt(0),a.slice(0,1).toUpperCase())
// alert("title Case"+c)

// Question 12

// var num=35.36;
// alert("variable num to string "+String(num))
// alert(typeof num)
// alert(num.remove("."))

// Question 13

// var username=prompt("Enter the username");
// for (var i = 33; i < 64; i++) {
//      if (username===i) {
//      alert("please enter valid username");
//      break;
//      }
//      }


// Chapter 26 - 30

// Question 1

// var a=prompt();
// document.write('number: '+a + "<br>");
// document.write('round off value '+Math.round(a) + "<br>");
//  document.write('floor value '+Math.floor(a)+ "<br>");
//  document.write('ceil value '+Math.ceil(a)+ "<br>");

// Question 2

// var neg_num=prompt();
// document.write('number: '+neg_num + "<br>");
// document.write('round off value '+Math.round(neg_num) + "<br>");
//  document.write('floor value '+Math.floor(neg_num)+ "<br>");
//  document.write('ceil value '+Math.ceil(neg_num)+ "<br>");

// Question 3
// var a=-4;
// document.write('number: '+Math.abs(a));

// Question 4

// document.write("random dice "+Math.round(Math.random()*6));

// Question 5
 
// var a=Math.round(Math.random()*2);
// if(a==2){
//     alert("heads");
// }
// else(a==1)
// {
//     alert("tails");
// }

// Question 6

// document.write("random number between 1 and 100"+Math.round(Math.random()*100));

// Question 7

// var weight = prompt("Enter your age.");
//  document.write(parseInt(weight));

// Question 8
// var a=prompt("input a number between 1 and 10");
// if(a==Math.round(Math.random()*10)){
// alert("congratulation");
// }
// else{
//     alert("try again");
// }

// chapter 31-34

// Question 1

// var rightNow = new Date();
// document.write(rightNow);

// Question 2

// var d = new Date();
//  var n = d.getMonth();
//  document.write("current month"+d);

 // Question 3

// var d = new Date();
// var n = d.getDay();
//  document.write("current Day "+n);

// Question 4

//  var message = prompt();
// if(message==="Sunday"){
//  document.write("It’s Fun day "+n);}

// Question 5
// var d = new Date();
// var dayOfMonth = d.getDate();
// var currYr = d.getFullYear();
// var currentHrs = d.getHours();
// var currMins = d.getMinutes();
// var currSecs = d.getSeconds()

// Chapter 35 - 38

// Question 1

// function dateandtime(){
//     alert(new Date());
// }

// dateandtime()

// Question 2

// function greeting(){
//     var firstname=prompt();
//     var lasttname=prompt();
//     alert("congrulation "+(firstname+lasttname));
// }
// greeting()

// Question 3

// function add(){
// var a=prompt();
// var b=prompt();
// sum=a + b;
// return sum;
// }
//var g= add()
//alert(g);

// Question 4
//  function calc(){
// var a=prompt();
// var opr=prompt();
// var c=prompt();
// if (opr === "+") {

//     return a+c
// }
// else if (opr === "*") {

//     return a*c
// }
// else if (opr === "-") {

//     return a-c}

// else{
//     return "nothing";
// }
// }
// var d=calc();
// alert(d);


// Question 5

function sqr(a){
 return a*a;
}
var b=sqr(4);
alert(b);


