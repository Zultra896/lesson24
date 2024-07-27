let str = "radar"
let start = 0
let end = str.length - 1
let flag = true

for (; start < end; start++, end--) {
    if (str[start] !== str[end]) {
      flag = false
      break
    }
} 

if (flag) {
    console.log("Строка является палиндромом")
} else {
    console.log("Строка не является палиндромом")
}