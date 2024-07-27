let num = 1234

let count = 0;

if (num === 0) {
    count = 1
}
for (; num > 0; num = Math.floor(num / 10)) {
count++
}

console.log(count)