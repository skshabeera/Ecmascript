// var arr=[2,4,6,7,8,10]
// // double
// function double(x){
//     return x*2
// }
// arr.map(double)
// // console.log(output)
// // triple
// const triple=arr.map(function(x){
//     return arr*3
// })
// console.log(triple)

// // binary
// const binary =arr.map((x) => x.toString(2))
// console.log(binary)

// const family=[
//     {firstname:"shabeera",lastname:"begum",age:22},
//     {firstname:"bhuvaneshwari",lastname:"bapanapally",age:22},
//     {firstname:"srilatha",lastname:"mathangi",age:22}
// ]
// const output=family.map(function(family){
//     return family.firstname+family.lastname
// })
// console.log(output)
let array=[1,2,3,4,5]
let multiplicationArray=array.map(function(element){
    return element*3
})
console.log(multiplicationArray)
