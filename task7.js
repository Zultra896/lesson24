let num = [1, 2, 3, 4, 5]

let max = Number.MIN_SAFE_INTEGER

for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i]
    }
}

console.log(max)