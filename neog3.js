// const arr = ["You", "all", "are", "rockstars"]
// const indexs=arr.reduce(function(acc,curr,index){
//         acc[index]=curr
//         return acc
         

// },{},1)
// console.log(indexs)

const arr = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]
const output=arr.filter(function(curr,acc){
        if(curr.name.length<=5){
            acc[curr.type]="fruits"
        }
        else{
            acc[curr.type]="vegitables"
        }
        return acc

},{})
console.log(output)
