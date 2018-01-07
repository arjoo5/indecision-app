//arguments object and this cann be used in arrow but not in es6 func
const add=function(a,b){
    return a+b;
};
console.log(add(12,14));
// const user={
//     name:'arjoo',
//     cities:['pjjk','kdjk','djkd'],
//     printPlaces: function(){
//         console.log(this.name);
//         const that=this;
//         console.log(this.cities)
//         this.cities.forEach(function(city){
//             console.log(that.name + 'hash'+ city);
//         });
//     }
// };
// const user={
//     name:'arjoo',
//     cities:['pjjk','kdjk','djkd'],
//     printPlaces(){
//         console.log(this.name);
//         console.log(this.cities)
//         this.cities.forEach((city)=>{console.log(this.name + 'hash'+ city);
//         });
//     }
// };
// user.printPlaces();
const user={
    name:'arjoo',
    cities:['pjjk','kdjk','djkd'],
    printPlaces(){
       const new1=this.cities.map((city)=>{
           return this.name +' has '+ city;
       });
       return new1;
        
    }
};
console.log(user.printPlaces());