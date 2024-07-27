let num = [1, 2, 3, 4, 2, 1, 3]

console.log(num)

for (let i = 0; i < num.length; i++) {
    if (num[i] == 3) {
        num.splice(i, 1)
        continue
    }
}

console.log(num)