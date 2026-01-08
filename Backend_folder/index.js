//this is called closure
// function main (){
//     var a=10
//     function sum(){
//       console.log(a)
//     }
//     sum()
   
// }
//  main()




// function main (){
    
//     function sum(){
//       var a=10
//       var b=20
//       if(a>5){
//         const s1=a*2+b 
//         console.log(`Sum of ${a} and ${b} is ${s1} `)
//       }else{
//         const s2=a+b 
//         console.log(`Sum of ${a} and ${b} is ${s2} `)
//       }
//       console.log('Answers:',s1,s2)
//     }
//     sum()
   
// }
//  main()

//normal function 
function main(){
    const sum=(a,b)=>a+b
    const s=sum(10,30)
    console.log(s)
    
}
main()

//anonymouse function
setTimeout(function (){
    console.log('Executed after 2 seconds')
},2000)

//object 
function main(){
    const users=[
        {
            id:1,
            name:'Smaran',
            age:20
        },
                {
            id:2,
            name:'Sohan',
            age:25
        },
                {
            id:3,
            name:'Sandesh',
            age:26
        },
                {
            id:4,
            name:'Nilesh',
            age:23
        },
                {
            id:5,
            name:'Dipak',
            age:24
        },
                {
            id:6,
            name:'Prabhat',
            age:27
        },
                {
            id:7,
            name:'Manesh',
            age:28
        }
    ]

//  for (let i in users){
//     console.log(users[i].name)
//  }
//map method 
const finalvalue=users.map((user)=>{
    return `id:${user.id*3} and name: ${user.name}`
})
console.log(finalvalue)
 
//filter method
const filterValue=users.filter((user)=>{
    if(user.age>=28) return `${user.name} is not GenZ `
})
console.log('Filtered Value:', filterValue)

const reduceValue=users.reduce((acc,user)=>{
   
},0)
console.log(reduceValue)


}
main()

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]
const final_value=array.reduce((acc,arr)=>{
    return acc+arr
},0)
console.log(final_value)