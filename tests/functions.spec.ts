function add (a:number, b:number):number {
    return a+b;
}

let sub = function(a:number, b:number):number {
    return a-b;
}

let mul = (a:number, b:number):number => {
    return a*b;
}

console.log(add(10,20)); // 30
console.log(sub(10,20)); // -10
console.log(mul(10,20)); // 200