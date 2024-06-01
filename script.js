//////////////////////////////////////////////////////////////////////////
//Nr.1//

function Two_Num(num1 = 0, num2 = 0) {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        return num1 * num2;
    }
    else if ((num1 % 2 == 1 && num2 % 2 == 1)) {
        return num1 + num2;
    }
    else if (num1 % 2 == 0 && num2 % 2 == 1) {
        return num2;
    }
    else if (num2 % 2 == 0 && num1 % 2 == 1) {
        return num1;
    }
}

let result = Two_Num(+prompt('Enter num1'), +prompt('Enter num2'));
console.log(result);

//////////////////////////////////////////////////////////////////////////
//Nr.2//

function Sec_In_Day(Sec = 0){
    return Sec / 86400;
}

let result1 = Sec_In_Day(+prompt('Enter Sec'));
console.log(`${result1} Day`);

//////////////////////////////////////////////////////////////////////////
//Nr.3//

function isPrime(num) {

    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    
    return true;
}

let res = isPrime(+prompt('Enter num'));
console.log(res);

//////////////////////////////////////////////////////////////////////////
//Nr.4//

function Low_Big(b, d) {
    if (b > d || d < b) {
        return d
    }
    if (d > b || b < d) {
        return b
    }
}

let res1 = Low_Big(+prompt('Enter num1'), +prompt('Enter num2'));
console.log(res1);

//////////////////////////////////////////////////////////////////////////
//Nr.5//

function range(a, b) {
    let result = [];

    let min;
    let max;

    if (a < b || b > a) {
        min = a;
    }
    else {
        min = b;
    }
    if (b > a || a < b) {
        max = b;
    }
    else {
        max = a;
    }
    if (a == b || b == a) {
        return `${a} равно ${b}, впишите два разных числа`
    }


    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    
    return result;
}

let result2 = range(+prompt('Enter num1'), +prompt('Enter num2'));
console.log(result2);

//////////////////////////////////////////////////////////////////////////