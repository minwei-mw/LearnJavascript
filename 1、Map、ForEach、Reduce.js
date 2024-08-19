const orders = [
    {customer: "Alice", items: [{product: "Apple", quantity: 2}, {product: "Banana", quantity: 5}], total: 50},
    {customer: "Bob", items: [{product: "Orange", quantity: 3}, {product: "Banana", quantity: 2}], total: 40},
    {customer: "Alice", items: [{product: "Apple", quantity: 1}, {product: "Orange", quantity: 2}], total: 30},
    {customer: "Bob", items: [{product: "Apple", quantity: 2}, {product: "Banana", quantity: 1}], total: 25}
];

/***Reduce****/
// const result = orders.reduce((acc, order) => {
// acc 累加器，order当前值
//     if(!acc[order.customer]) {
//         acc[order.customer] = {
//             totalSpent:0,
//             itemsPurchased:0
//         };
//     }
//     acc[order.customer].totalSpent += order.total;
//
//     order.items.forEach(item=> acc[order.customer].itemsPurchased += item.quantity)
//
//     return acc
//
// },{})\

/***forEach****/
// const result = {};
// orders.forEach(order => {
//     if(!result[order.customer]) {
//         result[order.customer]={
//             totalSpent:0,
//             itemsPurchased:0,
//         }
//     }
//     result[order.customer].totalSpent += order.total;
//
//     order.items.forEach(item => result[order.customer].itemsPurchased += item.quantity);
// })

/***Map****/
const result = new Map();
orders.forEach(orde => {
    if (!result.has(orde.customer)) {
        result.set(orde.customer, {
            totalSpent: 0,
            itemsPurchased: 0
        });
    }

    const customerData = result.get(orde.customer);

    customerData.totalSpent += orde.total;

    orde.items.forEach(item => customerData.itemsPurchased += item.quantity);

})


console.log('map',Object.fromEntries(result));