// var product = prompt ("Enter Product");

// if (product === "Biryani"){
//     alert("Available hai \n Your order is access");
// }
// else if(product === "biryani") {
//     alert("Biryani is available but order book krwane k liye (B) capital likhen \n (Shukriya)")
// }
// else {
//     alert("Sorry only Biryani is available");
// }


// var age = +prompt ("Enter your age");

// if (age <= 17){
//     alert("Ticket price is Rs.30");
// }
// else if (age >= 18 && age < 50){
//     alert("Ticket price is Rs.50");
// }
// else {
//     alert("Ticket is free");
// }


// var x = "Enter value";
// var y = "Your value is ";
// var a = +prompt (x,y);
// var b = a + 10;
// document.write("The output is" + " " + b)


// var age = +prompt ("Enter your age");
// var Gender = prompt ("Enter your Gender");

// if (age > 18 || Gender == "male"){
//     alert("You are allowed to ride")
// }else{
//     alert("You are not allowed")
// }

var weight = +prompt ("Enter your weight", "your weight is ");
var time = prompt ("Enter your time", "your time is ");
var $age = prompt ("Enter your age", "your age is ");
var $gender = prompt ("Enter your gender", "your gender is ");


if (weight > 300 && time < 6 && $age > 17 && $gender === "male") {
    alert("Come to our tryout");
}else{
    alert("Come to our cookout!");
}