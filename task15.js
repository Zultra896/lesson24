let one = [1,1,1,1,1]
let flag = true

for(let i = 0; i < one.length - 1; i++) {
    console.log(i)
    if(one[i] !== one[i+1]) {
        flag = false
        break
    }
}

console.log(flag)