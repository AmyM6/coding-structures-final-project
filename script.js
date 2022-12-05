// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");

// toppings array
var toppings = [];

// event listener
var formButton = document.getElementById("btn");
formButton.addEventListener("click", function(e) {
    e.preventDefault();

    var topping1 = document.getElementById("topping1").value;
    var topping2 = document.getElementById("topping2").value;
    var topping3 = document.getElementById("topping3").value;

    toppings.push(topping1);
    toppings.push(topping2);
    toppings.push(topping3);
    console.log(toppings);

    calculateTotal(toppings);
});

function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    var orderString = "pizza with ";

    // orderString = "Crust pizza with Sauce.";
    orderString = crust.value + " " + orderString + sauce.value;

    let toppingString = "Toppings: ";

    // For Loop
    for(var i = 0; i < toppingArray.lenght; i++) {

        if(toppingArray[i] != " "){
            toppingString = toppingString + toppingArray[i] + " ";
            total = total + toppingCost;
        }
    }

    //putting toppingString together
    toppingString = toppingString + toppingArray;

    // total = baseCost + cost of all toppings
    total = toppingCost*3 + baseCost;

    // set DOM total += total   
    document.getElementById("total").innerHTML += total;
    // use DOM: = orderString   
    document.getElementById("pizzaOrder").innerHTML = orderString;
    // use DOM: = toppingString 
    document.getElementById("toppings").innerHTML = toppingString;
}