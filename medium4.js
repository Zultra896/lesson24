let num = [5, 9, 3, 7, 2, 8, 1, 6, 4]

let result
let sum = 0

for (let i = 0; i < num.length; i++) {
    sum += num[i]
}

result = Math.floor(sum / num.length)

console.log(result)