//  1: check the whether number is postive or negitive
var a=-10;
if(a>0){
    console.log("positive number")
}
else{
    console.log("negative number")
}

// 2 : check whether num is even or odd

var a=14;
if(a%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}


// 3: area of trianlge
var a=10;
var b=20;
var c=30;
console.log((a*b*c)/2);

//4: Leap year

var year = 400;
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("Leap year!");
} else {
  console.log("Not a Leap year!");
}


//5:  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

var c=-90;
var f =100;

if(c>0){
    console.log(`${c} degree temperature in Celsius is ${c/5} degree Fahrenheit`)
    console.log(` ${f} temperature in Fahrenheit is ${(f-32)/9} degree Celsius`)
}

else{
    console.log(`${c} degree temperature in Celsius is ${c/5} degree Fahrenheit`)
    console.log(` ${f} temperature in Fahrenheit is ${(f-32)/9} degree Celsius`)
}




// 6. switch statement
var color="red"
switch (color){
    case "red" : console.log("red color")
    break
    case "orange": console.log("orange color")
    break
    default : console.log("Choose the correct color")
}


// 7. write a program to male and female are eligible to marry according to their age

var g=+prompt("enter gender");
var age=+prompt("Enter the age");

switch(g){
     case "male" :
        if(age>21){
            console.log("Male person is eligible to marry")
        }
        else{
            console.log("male is not eligible to marry")
        }
    case "female" :
        if(age>18){
            console.log("Female person is eligible to marry")
        }
        else{
            console.log("Female person is not eligible to marry")
        }
    default: console.log("Enter age more than 18 and check the condition")
}


//8. Create a program that asks the user for the current hour (in 24-hour format) and greets them accordingly (e.g., Good morning for hours 5-11, Good afternoon for hours 12-17, Good evening for hours 18-22, and Good night for hours 23-4).

var time=prompt("enter the time");
if(time>=5 && time<=11){
    console.log("Good morning")
}
else if(time>=12 && time<=17){
  console.log("Good afternoon")
}
else if(time>=18 && time<=22){
  console.log("Good evening")
}
else if((time>=23 && time<=24) || (time>=0 && time<=4)){
     console.log("Good night")
}
else{
    console.log("enter A time in between 0 ot 24")
}




// 9. vowels and consontant
var L = prompt("enter any Letter")
if((L=="a"||L=="A" )||( L=="e" ||  L=="E") || (L=="i"||L=="I") || (L=="o"||L=="O")|| (L=="u"||L=="U")){
    console.log(`you have entered the Letter ${L} which is voweL`)
}
else{
    console.log(`you have entered Letter ${L} which is consonant`)
}


// 10. user login
var user=prompt("enter username")
var pwd=prompt("enter password")
if((user=="admin" && pwd=="admin123")){
    console.log("login is successfull")
}
else{
    console.log("Login failed")
}



//11.  Find the greatest number among three numbers:
var num1=prompt("enter number1")
var num2=prompt("enter number2")
var num3=prompt("enter number3")

if((num1>num2 && num1>num3)){
    console.log(`Greatest number is number1 ${num1}`)
}
else if((num2>num1 && num2>num3)){
      console.log(`Greatest number is number2 ${num2}`)
}
else if((num3>num1 && num3>num2)){
    console.log(`Greatest number is number3 ${num3}`)
}
else{
    console.log("enter only positive number")
}



//12.  find the person age lies between the 10 and 20
var age=prompt("enter the age")
if((age>=10 && age<=20)){
    console.log("person age lies between the 10 and 20")
}
else{
    console.log("person age doesn't lies between the 10 and 20")
}


// 13. write a program to find number is divisible by 2 , 3 and  number divisible by both the number
var a=prompt("enter a number")
if(a%2==0){
    if(a%3==0){
        console.log(`you have entered number ${a} which is divisible by both 2 and 3`)
    }
    else{
        console.log(`you have entered number ${a} it is divisible by 2`)

    }
}

else if(a%3==0){
    console.log(`you have entered number is ${a} divisible by 3`)
}
else{
    console.log(`entered number ${a} is not divisible by 2 or 3`)
}


//14. Write a JavaScript program that displays the largest integer among two integers.


var a =+prompt("Enter the number : ")
var b =+prompt("Enter the number : ")
if(a>0){
if(a>b){
    console.log(a+"is greater number")
}
else {
    console.log(b+"is greater")
}
}
else{
    console.log("Enter the positive integers ")
}


//15. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
var x = 3;
var y = -7;
var z = 2;

// Checking different conditions based on the signs of x, y, and z
if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}


//16. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.


var a=0;
var b = 10
var c=-5

if(a>b && b>c){
    if(b>c){
        console.log(a+"," +b + ","+c)
    }
    else{
       console.log(a+"," +c + ","+b)
      
   }
}
else if(b>a && b>c ){
    if(a>c){
        console.log(b+"," +a + ","+c)
    }
    else{
       console.log(b+"," +c + ","+a)
      
   }
}
else if(c>a && c>b){
    if(a>b){
        console.log(c+"," +a + ","+b)
    }
    else{
       console.log(c+"," +b + ","+a)
      
   }
  
}
else{
    console.log("Given number can't be sorted")
   }



//17. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.

var a = -5;
var b =-2 
var c =50
var d= 0
var e= -1;

if(a>b && a>c && a>d && a>e){
    console.log(a+" is greater number ")
}
else if(b>a && b>c && b>d && b>e){
    console.log(b+" is greater number ")
}
else if(c>b && c>a && c>d && c>e){
    console.log(c+" is greater number ")
}
else if(d>a && d>c && d>b && d>e){
    console.log(d+" is greater number ")
}
else if(e>b && e>c && e>d && e>a){
    console.log(e+" is greater number ")
}

//18. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.


for(i=1;i<=15;i++){
    if(i%2==0){
        console.log(i+" is a even number ")
    }
    else{
        console.log(i+" is a odd number ")
    }
}



//19. Write a JavaScript program to sum 3 and 5 multiples under 1000.


var a = 5
var b =3
var count=0

for(i=1;i<1000;i++){
    if(i%a==0 || i%b==0){
        count+=i
    }
}
console.log(count)



