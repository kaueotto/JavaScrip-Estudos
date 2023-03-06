const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(Element => {
    Element.innerHTML = "Curso"
})

console.log(objs1)
console.log(objs2)

// const soma = (v1,v2,v3) => {
//     return v1+v2+v3
// }

// let valores=[1,4,5]

// console.log(soma(...valores))