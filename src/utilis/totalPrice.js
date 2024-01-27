export const totalPrice = (groupProducts) => {
    return groupProducts.reduce((sum, product) => sum + product.price , 0).toFixed(2);
}