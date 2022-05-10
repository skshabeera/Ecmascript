// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70]
// const number=arr.reduce(function(acc,curr){
//     if(curr>50){
//         acc=acc+curr
//     }
//     return acc
    
// },0)
// console.log(number)
    
// const arr = [1, 2, 3, 7, 5, 6, 8, 9]
// const product=arr.reduce(function(acc,curr){
//     if(curr%2===0){
//         acc=acc*curr
//     }
//     return acc
// })
// console.log(product)

const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]
const product= arr.reduce(function(acc,i){
    acc=acc+i.age
    return acc

},0)
console.log(product)

