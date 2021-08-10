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
