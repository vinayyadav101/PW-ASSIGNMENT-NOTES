let itamesAndPrice = [
    {
        item:"laptop",
        price:200
    },
    {
        item:"mobile",
        price:100
    },
    {
        item: "bike",
        price: 625
    }
]

const IndianCurrrancyExchageRate = 80;

let exchagePrice = itamesAndPrice.map((value) => {
    let afterChageRate = {};

    afterChageRate.item = value.item
    afterChageRate.price = `${value.price * IndianCurrrancyExchageRate} RUPEES`

    return afterChageRate
})

console.log(exchagePrice);

// output: 
// [
//     { item: 'laptop', price: '16000 RUPEES' },
//     { item: 'mobile', price: '8000 RUPEES' },
//     { item: 'bike', price: '50000 RUPEES' }
// ]