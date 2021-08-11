// problem-1 

function seerToMon(seer) {
    if (seer >= 0) {
        let mon = seer / 40;

        return mon;
    }
    else {
        return "You enter invalid input";
    }
}

const result = seerToMon(200);
console.log(result);


// problem-2

function totalSales(shirt, pant, shoe) {

    if (shirt >= 0 && pant >= 0 && shoe >= 0) {

        const shirtCost = shirt * 100;
        const pantCost = pant * 200;
        const shoeCost = shoe * 500;

        const totalprice = shirtCost + pantCost + shoeCost;

        return totalprice;
    }

    else {
        return "You enter a wrong amount";
    }
}
const total = totalSales(2, 0, 3);
console.log(total);



// problem-3

function deliveryCost(n) {
    const amount1 = 100;
    const amount2 = 80;
    const amount3 = 50;

    if (n >= 0 && n <= 100) {
        const shirt100 = n * amount1;

        // const deliveryPrice = shirt100;
        return shirt100;
    }
    else if (n >= 0 && n <= 200) {
        const shirt100 = 100 * amount1;
        const restshirt = n - 100;
        const shirt80 = restshirt * amount2;

        const deliveryPrice = shirt100 + shirt80;

        return deliveryPrice;
    }
    else if (n > 200) {
        const shirt100 = 100 * amount1;
        const shirt80 = 100 * amount2;
        const restshirt = n - 200;
        const shirt50 = restshirt * amount3;

        const deliveryPrice = shirt100 + shirt80 + shirt50;

        return deliveryPrice;

    }
    else {
        return "Sorry your input data is invalid";
    }

}
const totalDelivery = deliveryCost(500);
console.log(totalDelivery);

