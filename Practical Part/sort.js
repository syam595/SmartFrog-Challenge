function sort(input) {
    
    if (!input) {
        console.error("Enter valid input");
        return input;
    }

    const temp = input.match(/\d+|[a-zA-Z]|\W/g) || [];
    let num = [], lower = [], upper = [], special = [];

    temp.forEach(n => {
        if (/^\d+$/.test(n)) {
            num.push(parseInt(n, 10));
        } else if (/[a-z]/.test(n)) {
            lower.push(n);
        } else if (/[A-Z]/.test(n)) {
            upper.push(n);
        } else {
            special.push(n);
        }
    });

    num.sort((a, b) => a - b);
    lower.sort();
    upper.sort();
    special.sort();
    return [...num, ...lower, ...upper, ...special].join('');
}


console.log(sort('A11a4'));
console.log(sort('abCA1da')); 
//console.log(sort(''));
