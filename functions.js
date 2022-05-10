// const greet = name =>  name

// const greeting = greet("shabeera")
// console.log(greeting)

// const greet=()=>"hello world"
// const result=greet()
// console.log(greet())

// const addition=(array)=>{
//     let sum=0
//     for(let i=0;i<array.length;i++){
//         sum+=array[i]
        
//     }
//     return sum
// }
// console.log(addition([1,2,3,4,5]))

let names = ["vasantha","madhavi","shabeera","anusha"]
let fav_names=(person,index)=>{
    console.log(`${index} hello ${person}`)
}
names.forEach(fav_names)