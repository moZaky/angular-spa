// function typeScriptFeatures_LeT_VS_Const() {
//    let a ="Hi"
//     {
//          a = "typeScriptFeatures_LeT_VS_Const will not print";
//     }
//     console.log(a);
// }
// function Add(num1, num2){
//     return num1+num2;
// }
// console.log(Add(1,2));


// const AddFatArrow =(num1,num2)=>num1+num2;
// console.log(AddFatArrow(1,2));

// function VanillaJS() {
//     {
//         var a = "VanillaJS block, will print";
//     }
//     console.log(a);
// }
// VanillaJS();
//typeScriptFeatures_LeT_VS_Const();\

// function templateStrings(){
//     const name="Mohammmed"
//      return `hello ${name}`
// }

// setTimeout(function() {
//     console.log("setTimeout called!");
//   }, 1000);
  
//   setTimeout(()=> {
//     console.log("setTimeout fatarrow called!");
//   }, 800);
  
//console.log(templateStrings());


const obj =[{"name":"mohammed","address":"UAE"},{"name":"ahmed","address":"egypt"}]
//spread oprator 1..4
//  const objMap= obj.map(x=>{
//     if(x.address=="UAE"){

//         return {...x,"car":"nissan"}
//     }
//     return {...x,"car":"toyta"}

//  })

// console.log({objMap})
 for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}:${value.name}`);
}
console.log(Object.keys(obj));


// const objectFilter= obj.filter(x=>x.name!="mohammed");

// console.log({objectFilter})

// const array =[1,2,3,4]
// // const array2= [0,...array,5]
// // console.log(array2)

 

// const filterArray= array.filter(number=>number!=1);
// console.log({filterArray})