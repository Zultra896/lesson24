let num = [10,12,31,40,15]
let N = 31
let index = -1

for (let i = 0; i < num.length; i++) {
    if (num[i] === N) {
        index = i
        break;
    }
}

console.log(index)