const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];
const output=inventory.reduce(function(acc,curr){
    if(curr.quantity<2){
        acc.push(curr.name)
    }
    return acc
},[])
console.log(output)

const output2=inventory.reduce(function(acc,curr){
    acc=acc+curr.quantity
    return acc

},0)
console.log(output2)

const output3=inventory.filter(function(curr){
    if(curr.quantity === 0){
        return curr.quantity
    }
})
console.log(output3)
