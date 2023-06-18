function cartModel(cOid, ocICode, ocItemName, ocQty, ocPrice, ocTotal){
    return {
        orderCId: cOid,
        orderCItemCode: ocICode,
        orderCItemName: ocItemName,
        orderCQty: ocQty,
        orderCPrice: ocPrice,
        orderCTotal: ocTotal
    }
}