// const number = document.querySelector('#number')
// const binnary = document.querySelector('#binnary')
// const convertBtn = document.querySelector('#convert')
// const result = document.querySelector('#result')

// convertBtn.addEventListener('click', () => {
//     numbers = [+number.value, +binnary.value]
//     let output = numbers[0].toString(numbers[1])
//     let symbols = output.split('')
//     let count = 0
//     symbols.forEach((item, i, symbols) => {
//         if (item == "1") {
//             count++
//         }
//     })
//     if (numbers[0] > 0) 
//     {
//         console.log(output.value)
//         result.value = `Result is ${output}, count of bits - ${count}`
//     }
// })


// var countBits = function(n) {
//     let result = n.toString(2)
//     let mas = result.split('')
//     let count = 0
//     if (+n > 0) {
//         mas.forEach((item, i, mas) => {
//             if (item == "1") {
//                 count++
//             }
//         })
//         console.log(`Result is ${result}, count of bits - ${count}`)
//     }
// }

// function isWalidWalk(walk) {
//     if (walk.length == 10) {
//         let n,s,w,e = 0
//         walk.forEach((item, i, walk) => {
//             if (item == "n") {
//                 n++
//             }
//             if (item == "s") {
//                 s++
//             }
//             if (item == "w") {
//                 w++
//             }
//             if (item == "e") {
//                 e++
//             }
//         })
//         if ((n == s)) {
//             return console.log(true)
//         }
//         else console.log(false)
//     }
// }

// isWalidWalk(['n','s','n','s','n','s','n','s','n','s'])

// function isWalidWalk() {
//     const walk = ['n','n','n','e','e','w','w','s','s','s']
//     if (walk.length == 10) {
//         let n = 0
//         let s = 0
//         let w = 0
//         let e = 0
//         walk.forEach((item, i, walk) => {
//             if (item == "n") {
//                 n++
//             }
//             if (item == "s") {
//                 s++
//             }
//             if (item == "w") {
//                 w++
//             }
//             if (item == "e") {
//                 e++
//             }
//         })
//         if ((n == s) && (w == e)) {
//             return true
//         }
//         else return false
//     }
//     else {
//         return false
//     }
// }
//
// console.log(isWalidWalk())

// function findShort(s){
//     // let words = s.split(' ')
//     // let minLengthWord = words[0]
//     // for(let i = 0; i < words.length; i++) {
//     //     if (words[i].length < minLengthWord.length) {
//     //         minLengthWord = words[i]
//     //     }
//     // }
//     // return console.log(minLengthWord.length)
//     return console.log(Math.min(...s.split(" ").map (s => s.length)))
// }
//
// findShort("Буря мглою небоооо кроет")

// function printerError(s) {
//     const legalLetters = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
//     const mas = s.split('')
//     let errors = 0
//     // for (let i = 0; i < legalLetters.length; i++) {
//     //     if(mas.indexOf(legalLetters[i]) != -1) {
//     //         errors++
//     //     }
//     // }
//     for (let i = 0; i < legalLetters.length; i++) {
//         for (let j = 0; j < mas.length; j++) {
//             if(mas[j] === legalLetters[i]) {
//                 errors++
//             }
//         }
//     }
//     return `${errors}/${mas.length}`
// }

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
//
// function printerError(s) {
//     return s.match(/[^a-m]/g).length + "/" + s.length;
// }

// function createPhoneNumber(numbers){
//     return `(${numbers[0]}${numbers[1]}${numbers[2]} ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]})`
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// function narcissistic(value) {
//     const masDigits = []
//     let valueNumber = Number(value)
//     function countDigits(n) {
//         for(var i = 0; n > 1; i++) {
//            n /= 10;
//         }
//         return i;
//     }
//     const masLength = countDigits(valueNumber)
//     for(let i = 0; i < masLength; i++) {
//         masDigits[i] = Math.floor(valueNumber % 10)
//         valueNumber /= 10
//     }
//     let sum = 0
//     for(let i = 0; i < masLength; i++) {
//         sum += Math.pow(masDigits[i],masLength)
//     }
//     if ((Number(value) == sum) || Number(value) == 1) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(narcissistic(153))
  

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// function list(names){
//     let outputString = "";
//     if(names.length == 0) {
//         return '';
//     }
//     else if (names.length == 1) {
//         return names[0].name;
//     }
//     else if (names.length == 2) {
//         return `${names[0].name} & ${names[1].name}`;
//     }
//     else if (names.length > 2) {
//         for(let i = 0; i < (names.length - 2); i++) {
//             outputString += (names[i].name + ', ');
//         }
//         outputString += names[names.length - 2].name + ' & ';
//         outputString += names[names.length - 1].name;        
//     }
//     return outputString;
// }

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))

// const list = [{name : 'Bart'}]
// console.log(list[0].name)

let arr = ['https://google.com']

let answer = prompt('Вам 18?')

console.log(answer)
