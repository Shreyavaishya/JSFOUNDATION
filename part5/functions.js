function makeTea(typeOfTea){
    return`Making ${typeOfTea}`
}
let teaOrder = makeTea("lemon tea");

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder()
}
let orderconfirmation = orderTea("chai");
console.log(orderconfirmation);

// arrow function
const calculateTotal = (price, quantity) => {
    return price * quantity
}
let totalCost = calculateTotal(499 * 100);

// Higher order function 
function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction){
   return teaFunction("earl gray")
}
let order = processTeaOrder(makeTea);

function createTeaMaker(name){
    return function (teaType) {
        return `Making ${teaType}`;
    };
} 
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
