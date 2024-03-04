var product = prompt("Enter Product");

if (product === "Biryani"){
    alert("Available hai \n Your order is access");
}
else if(product === "biryani") {
    alert("Biryani is available but order book krwane k liye (B) capital likhen \n (Shukriya)")
}
else /*("")*/ {
    alert("Sorry only Biryani is available");
}


var age = +prompt ("Enter your age");

if (age <= 17){
    alert("Ticket price is Rs.30");
}
else if (age >= 18 && age < 50){
    alert("Ticket price is Rs.50");
}
else {
    alert("Ticket is free");
}