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

