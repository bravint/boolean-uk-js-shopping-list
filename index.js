var list = [
    {
        "desc": "milk",
        "price": 1.20
    },

    {
        "desc": "cocoa",
        "price": 2.00
    },
    
    {
        "desc": "salad",
        "price": 2.00
    },

    {
        "desc": "carrots",
        "price": 2.00
    },
    
    {
        "desc": "tomatoes",
        "price": 2.50
    },
    
    {
        "desc": "ready meals",
        "price": 5.00
    },
];

for (i=1; i<Infinity; i++) {
    var newDesc = prompt(`Add an item to the list, type none to stop adding items`);
    var newPrice = Number(prompt(`How much does it cost`));
    if (newDesc === '' || newDesc === 'none' || newPrice === 0 || newPrice !== newPrice) {
        break
    } else {
        var NewItem = {desc:newDesc, price:newPrice};
        list.push(NewItem);
    }
}

let priceTotal = 0
for (i=0; i < list.length; i++) {
    priceTotal += list[i].price;
}
priceTotal = priceTotal.toFixed(2)

console.log(list);
console.log(`Total price for all items on this list = £${priceTotal}`);