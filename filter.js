companies=[
    {name:"Company One",categery:"finance",start:1981,end:2003},
    {name:"Company Two",categery:"Retail",start:1981,end:2003},
    {name:"Company Three",categery:"auto",start:1981,end:2003},
    {name:"Company Four",categery:"Retail",start:1981,end:2003},
    {name:"Company Five",categery:"Technology",start:1981,end:2003},
    {name:"Company Six",categery:"Finance",start:1981,end:2003},
    {name:"Company Seven",categery:"Auto",start:1981,end:2003},
    {name:"Company Eight",categery:"Technology",start:1981,end:2003},
    {name:"Company Nine",categery:"Retail",start:1981,end:2003}
]
let retailcompany=companies.filter(function(company){
    if (company.categery==="Retail"){
        return true
    }
})
console.log(retailcompany)