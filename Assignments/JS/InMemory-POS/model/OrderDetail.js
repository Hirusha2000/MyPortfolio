function orderDetail(orderId,orderDate,cusId,itemCode,itemName,qty,dis,total){
    return {
        oId: orderId,
        date: orderDate,
        Id: cusId,
        code: itemCode,
        itName: itemName,
        discount: dis,
        totalPrice: total
    }
}