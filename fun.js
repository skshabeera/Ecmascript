// function isNumber(){
//     if(isNaN){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isNumber())

// largest
// function largest(){
//     num1=require("readline-sync")
//     greater=num1.question("enter the number")
//     num2=require("readline-sync")
//     smallest=num1.question("enter the number")
//     if(greater>smallest){
//         console.log("num1 is greater than num2 ")
//     }
//     else if(smallest>greater){
//         console.log("num2 is greater than num1")
//     }
//     else{
//         console.log("num1 is equal to num2")
//     }
// }
// largest()
// find the max between three
function findlargest(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1," is greater")
    }
    else if(num2>num1 && num2>num3){
        console.log(num2, "is greater")
    }
    else{
        console.log(num3 ,"is greater")

    }
}
findlargest(1,3,2)