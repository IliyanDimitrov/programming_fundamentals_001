function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, surName){

    return firstName + " " + surName;
} 

function makeHalfPrice(price) {
    return price / 2;
}

function countBooks(list) {
    return list.length;
}

function isInStock(bookObj) {
    return bookObj.quantity > 0 ? true : false;
}

function getTotalOrderPrice(price, qty) {

    return addVAT(price * qty);
}


module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};