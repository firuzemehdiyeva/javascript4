//1.mehsullarin ucuzdan bahaya siralanmasi.
//  let products=[
//    {
//     id:1,
//     name:"Iphone 14 Pro",
//     price:2000
//    },
//    {
//     id:2,
//     name:"Iphone 11",
//     price:1200
//    },
//    {
//     id:3,
//     name:"Tablet",
//     price:1000
//    },
//    {
//     id:4,
//     name:"Samsung A50",
//     price:700
//    },
//    {
//     id:5,
//     name:"Iphone 15 Pro",
//     price:3000
//    },
//    {
//     id:6,
//     name:"Samsung A70",
//     price:500
//    }
// ];
// function productSira(max, min) {
//     return max.price - min.price;
// }
// products.sort(productSira);
// console.log("Ucuzdan bahaliya dogru duzulusu:");
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].name + ": " + products[i].price );
// }
    


//2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin
// function besrandomEded(){
//     let randomEded=[];
//     let cem=0;
//     for(i=0;i<5;i++){
//         randomSay=Math.random();
//         randomEded.push(randomSay);
//         cem+=randomSay;
//     }
//     return{randomEded,cem};
// }
// let {randomEded,cem}=besrandomEded();
// console.log("ededlerin sayi ",randomEded);
// console.log("ededlerin cemi",cem);