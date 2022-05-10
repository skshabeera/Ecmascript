// variabels
// let name="shabeera"
// console.log(name)

// name="sowmya"
// console.log(name)

// const marks=23
// console.log(marks)


// var age =25
// console.log(age)

// // strings
// console.log("hello ,shabeera")
// let email ="shabeerashaik10@gmail.com"
// console.log(email)
// let firstName="shaik";
// let lastName="shabeera";
// let fullName=firstName+" "+lastName;
// console.log(fullName)

// console.log(fullName[0])
// console.log(fullName.length)
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(email.indexOf("@"))
// console.log(email.lastIndexOf("n"))
// console.log(email.slice(0,5))
// console.log(email.substr(4,10))
// console.log(email.replace("n","w"))


// // NaN
// console.log(5/"helloworld")
// console.log(5*"hello world")

// // template string
// const title="Best reads of 2019"
// const author="mario"
// const likes=30
// // concatination
// // let result='the blog called'+title+'by'+author+'has'+likes+'likes';
// // console.log(result)

// // template string
// let result =`the dog${title}by ${author} has ${likes}`;
// console.log(result)

// // creating html template
// let html=`
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>this is ${likes}</span>
// `;
// console.log(html)



// forEach
const ul =document.querySelector('.people')
const people=["shabeera","anusha","soumya","madhavi"]
let html=" "

people.forEach(person =>{
    html +=`<li style="color:purple">${person}</li>`

})
console.log(html)
ul.innerHTML= html;








