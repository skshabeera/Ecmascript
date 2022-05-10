// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
// const join=arr.join("-")
// console.log(join)

// 24345687
var number=require("readline-sync")
var name=number.question("enter the number")
for(i in name){
    if (name[i]%2===0 && name[i+1]%2===0){
       var  a=name[i].join("-")
       console.log(a)
    }
    // console.log(name)

}
// console.log(a)
        

// let name=require("readline-sync")
// let number=name.question("enter the number")
// let a=number.slice(1,-1).toUpperCase()
// console.log(a)
