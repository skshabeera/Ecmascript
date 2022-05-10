// var arr=[5,1,2,3,4]
// const name=arr.reduce(function(acc,curr){
//     acc=acc+curr
//     return acc
// },0)
// console.log(name)

// max
// var arr=[2,5,7,9,10,8]
// const age=arr.reduce(function(max,curr){
//     if(curr>max){
//         max=curr
//     }
//     return max
    
// },0)
// console.log(age)
const users=[
    {firstName:"shabeera",lastName:"begum",age:22},
    {firstName:"madhavi",lastName:"nemmadi",age:23},
    {firstName:"anusha",lastName:"nemmadi",age:20},
    {firstName:"sowmya",lastName:"nemmadi",age:22}  
]
const output=users.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age]++

    }else{
        acc[curr.age]=1
    }
    return acc

},{})
console.log(output)
// const output= users.reduce(function(acc,curr){
//     if(curr.age<30){
//         acc.push(curr.firstName)
//     }
//     return acc

// },[])
// console.log(output)
