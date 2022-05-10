// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// const name=arr.filter(function(i){
//     if((i<=8) && (i%2===0)){
//         return i
//     }
// })
// console.log(name)

const arr = ['eat', 'sleep', 'repeat', 'code']
const name=arr.filter(function(i){
    if (i.length>5){
        return i
    }
})
console.log(name)