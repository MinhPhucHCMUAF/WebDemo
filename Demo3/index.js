// function sum(a,b){
//     return a + b
// }
// console.log(sum(4,5))

// let a = (a,b,c) => {
//     return a + b +c
// }
// console.log(a(2,3,4))
let name_lst = ['Alex','Bongos','Sam']
name_lst.push('Linh','Vao Cuoi')
name_lst.unshift(undefined)
// let other = [12, true, 'What', [3,4,5], 5.0]
console.log(name_lst)
console.log(name_lst.length)
// for (let index = 0; index < name_lst.length; index++) {
//     const element = name_lst[index];
//     console.log(element)
    
// }
name_lst.forEach(function(value, index){

    console.log(`${value} - ${index}`)
})
numlst = [23,5,6,10,11]
const n = numlst.map((e, i) =>{
    return e * 3
})
fil_nums = n.filter((e) =>{
    return e > 30
})
console.log(n)
console.log(fil_nums)
// name_lst.pop()
// console.log(name_lst)

// name_lst.shift()
// console.log(name_lst)
// console.log(name_lst[2])
