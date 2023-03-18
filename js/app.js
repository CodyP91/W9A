let item_names = ["Item 1", "Item 2", "Item 3"];
let item_prices = [10, 20, 30];
let in_stock = [true, false, true];

let first_item_name = item_names[0];
let first_item_price = item_prices[0];

item_names.push("Item 4");
item_prices.push(40);
in_stock.push(true);

let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();


