// 创建一个空的 Map 对象
let products = new Map();

// 1. 添加商品
function addProduct(name, price) {
    // 在此处实现添加商品的逻辑
    products.set(name, price);
}

// 2. 更新价格
function updatePrice(name, newPrice) {
    // 在此处实现更新价格的逻辑
    const productName = products.has(name);
    if(productName){
        products.set(name, newPrice);
    }
}

// 3. 获取价格
function getPrice(name) {
    // 在此处实现获取价格的逻辑
    return products.get(name);
}

// 4. 删除商品
function deleteProduct(name) {
    // 在此处实现删除商品的逻辑
    const productName = products.has(name);
    if(productName){
        products.delete(name);
    }
}

// 5. 获取商品总数
function getProductCount() {
    // 在此处实现获取商品总数的逻辑
    return products.size;
}

// 测试
addProduct('Apple', 1.5);
addProduct('Banana', 2.0);
console.log('products',products)
updatePrice('Apple', 1.8);
console.log(getPrice('Apple')); // 应输出 1.8
deleteProduct('Banana');
console.log(getProductCount()); // 应输出 1