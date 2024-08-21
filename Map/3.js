// 创建一个空的 Map 对象，用于存储订单
let orders = new Map();

const itemPrices = {
    'Laptop': 1000,
    'Mouse': 20,
    'Keyboard': 50,
    'Monitor': 300
};


// 1. 添加订单
function addOrder(orderId, customerName, items) {
    // items 是一个数组，每个元素为 {itemName: string, quantity: number}
    // 在此处实现添加订单的逻辑
    if (!orders.has(orderId)) {
        let totalAmount = 0;

        for (let item of items) {
            totalAmount += itemPrices[item.itemName] * item.quantity;
        }

        orders.set(orderId, {customerName, items, totalAmount});
    }
}

// 2. 合并订单
function mergeOrders(orderId1, orderId2) {
    // 在此处实现合并订单的逻辑
    // 返回合并后的新订单对象，或 null 如果订单不属于同一个客户
    const orders1 = orders.get(orderId1);
    const orders2 = orders.get(orderId2);

    const mergedItems = new Map();

    for (let item of orders1.items) {
        mergedItems.set(item.itemName, item.quantity);
    }

    for (let item of orders2.items) {
        if (mergedItems.has(item.itemName)) {
            let quantity = mergedItems.get(item.itemName);
            mergedItems.set(item.itemName, quantity += item.quantity);
        } else {
            mergedItems.set(item.itemName, item.quantity);
        }
    }

    let totalAmount = 0;
    for (let [itemName,quantity] of mergedItems.entries()) {
        totalAmount = itemPrices[itemName] * quantity;
    }

    return {
        customerName: orders1.customerName,
        items:Array.from(mergedItems.entries()).map(([itemName,quantity]) => ({itemName,quantity})),
        totalAmount
    }
}


// 3. 按金额排序订单
function getOrdersSortedByAmount() {
    // 在此处实现按金额排序订单的逻辑
    // 返回按总金额排序的订单数组
    const values = Array.from(orders.values());
    return values.sort((a, b) => {
        return b.totalAmount - a.totalAmount;
    })
}

// 4. 查找客户的最高金额订单
function getHighestOrderForCustomer(customerName) {
    // 在此处实现查找客户最高金额订单的逻辑
    // 返回该客户的金额最高的订单对象
    let highestOrders = null;
    for (let order of orders.values()) {
        if (order.customerName === customerName) {
            if (!highestOrders || order.totalAmount > highestOrders.totalAmount) {
                highestOrders = order;
            }
        }
    }
    return highestOrders;
}

// 测试
addOrder(1, 'Alice', [{itemName: 'Laptop', quantity: 1}, {itemName: 'Mouse', quantity: 2}]);
addOrder(2, 'Bob', [{itemName: 'Keyboard', quantity: 1}]);
addOrder(3, 'Alice', [{itemName: 'Monitor', quantity: 2}, {itemName: 'Mouse', quantity: 1}]);
console.log('orders', orders)
let mergedOrder = mergeOrders(1, 3);
console.log("mergedOrder", mergedOrder); // 应输出合并后的订单对象

let sortedOrders = getOrdersSortedByAmount();
console.log('sortedOrders', sortedOrders); // 应输出按总金额排序的订单列表

let highestOrder = getHighestOrderForCustomer('Alice');
console.log('highestOrder', highestOrder); // 应输出 Alice 金额最高的订单
