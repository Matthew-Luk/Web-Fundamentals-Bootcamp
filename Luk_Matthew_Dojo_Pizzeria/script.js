function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max,min){
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr){
    var i = Math.floor(arr.length * Math.random())
    return arr[i]
}

function randomPizza(){
    var pizza = {}
    pizza.crustType = randomPick(crustTypes)
    pizza.sauceType = randomPick(sauceTypes)
    pizza.cheeses = []
    pizza.toppings = []
    for(var i=0; i<randomRange(9,1); i++){
        pizza.cheeses.push(randomPick(cheeses))
    }
    for(var i=0; i<randomRange(9,0); i++){
        pizza.toppings.push(randomPick(toppings))
    }
    return pizza
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1)

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2)

var p3 = pizzaOven("thin crust", "traditional", ["mozzarella"], ["sliced tomato", "mushroom", "black olives", "bell pepper", "artichoke hearts"]);
console.log(p3)

var p4 = pizzaOven("traditional crust", "creamy garlic", ["mozzarella", "parmesan"], ["bacon", "chicken", "green onion", "diced tomatoes"]);
console.log(p4)

var p5 = randomPizza()
console.log(p5)
