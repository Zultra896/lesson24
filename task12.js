let num = [5, 9, 3, 7, 2, 8, 1, 6, 4]
let min = Number.MAX_VALUE

for (let i = 0; i < num.length; i++) {
    if (num[i] < min) {
        min = num[i]
    }
}

console.log(min)