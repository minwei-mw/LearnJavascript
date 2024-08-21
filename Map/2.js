// 创建一个空的 Map 对象，用于存储订单
/****
 1、Map遍历只能使用for of遍历
 2、Map提供了keys、values、entries
 3、entries 方法返回一个新的迭代器对象，迭代器的每一项是一个数组，包含两个元素：[key, value]。
 ******/
let orders = new Map();

// 1. 添加订单
function addOrder(orderId, customerName, totalAmount) {
    // 在此处实现添加订单的逻辑
    if(!orders.has(orderId))
    orders.set(orderId,{customerName, totalAmount});
}

// 2. 更新订单金额
function updateOrderAmount(orderId, newAmount) {
    // 在此处实现更新订单金额的逻辑
    if(orders.has(orderId)){
        const values = orders.get(orderId);
        orders.set(orderId, {...values,totalAmount: newAmount});
    }
}

// 3. 获取订单详情
function getOrderDetails(orderId) {
    // 在此处实现获取订单详情的逻辑
    return orders.get(orderId);
}

// 4. 删除订单
function deleteOrder(orderId) {
    // 在此处实现删除订单的逻辑
    if(orders.has(orderId)){
        orders.delete(orderId)
    }
}

// 5. 获取所有订单的总金额
function getTotalAmount() {
    // 在此处实现获取所有订单总金额的逻辑
    let totalAmount = 0;
    const values = orders.values();
    for(let order of values){
        totalAmount += order.totalAmount;
    }
    return totalAmount;
}

// 6. 获取特定客户的订单列表
function getOrdersByCustomer(customerName) {
    // 在此处实现获取特定客户订单列表的逻辑
    const customerList = [];
    const values = orders.values();
    for(let order of values){
        if(order.customerName === customerName){
            customerList.push(order);
        }
    }
    return customerList;
}

// 测试
addOrder(1, 'Alice', 250);
addOrder(2, 'Bob', 150);
addOrder(3, 'Alice', 300);
updateOrderAmount(2, 180);
console.log(getOrderDetails(1)); // 应输出订单1的详细信息
console.log(getTotalAmount()); // 应输出所有订单的总金额 (730)
console.log(getOrdersByCustomer('Alice')); // 应输出Alice的所有订单列表
deleteOrder(3);
console.log(getTotalAmount()); // 应输出删除后的总金额 (430)
