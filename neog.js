const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ];
//  
const output = family.reduce((acc, curr) => {
  if (curr.haveCycle  === true) {
    acc.push(curr.name);
  }
  return acc;
}, []);
console.log(output);
