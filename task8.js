let num = [1, 2, 3, 1, 2, 1]
let count1 = 0

for (let i = 0; i < num.length; i++) {
    if (num[i] === 1) {
        count1++
    }
}

console.log(count1)