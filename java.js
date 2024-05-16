"use strict";

/*const calcAverage = (score1, score2, score3)=>{
     return (score1 + score2 + score3)/3;
}
//DATA-1
const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);
console.log("Data-1 results: " + avgDolphins,avgKoalas);

//DATA-2
const avgDolphins1 = calcAverage(85,54,41);
const avgKoalas1 = calcAverage(23,34,27);
console.log("Data-2 results: " + avgDolphins1,avgKoalas1);

const checkWinner = (avgDolphins,avgKoalas)=>{
     if(avgDolphins >= avgKoalas*2){
          console.log(`Dolphins wins with ${avgDolphins} points to ${avgKoalas} points of Koalas`)
     } else if(avgDolphins*2 <= avgKoalas){
          console.log(`Koalas wins with ${avgKoalas} points to ${avgDolphins} points of Dolphins`)
     }else{
          console.log(`No one wins!`)
     }
}
checkWinner(avgDolphins,avgKoalas);
checkWinner(avgDolphins1,avgKoalas1);*/

/*const calcTip = (payment)=>{
     if(payment >= 50 && payment <= 300){
return (payment)*15/100;
     } else{
          return (payment)*20/100;
     }
} 
console.log(calcTip(100));

const bills = [125,555,44];
console.log(calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2]));
const total = [`The total bill For: $${bills[0]} is $${bills[0]+calcTip(bills[0])}`, `For: $${bills[1]} is $${bills[1]+calcTip(bills[1])}`, `For: $${bills[2]} is $${bills[2]+calcTip(bills[2])}`];
console.log(total);*/

/*const alfred = {
     firstName: "Alfred",
     lastName: "Mamooe",
     birthYear: 1994,
     job: "developer",
     location: "Canada",
     friends: ["Joel", "Moima","Joseph"],
     hasDriversLicense: true,
     calcAge: function(){
          return 2024-this.birthYear;
     
     },
     getSummary: function(){
       return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicense ? "a" : "no"} driver's license!`},
     hasLicense: function(){
          if(this.hasDriversLicense){
               return "a"
          } else{
               return "no"
          }
     }


}
console.log(alfred.getSummary());

const mark = {
     firstName:"Mark",
     lastName:"Miller",
     mass:78,
     height: 1.69,
     calcBMI:function(){
          this.bmi = this.mass/(this.height**2);
          return this.bmi;
     }
}

const john = {
     firstName:"John",
     lastName:"Smith",
     mass:92,
     height: 1.95,
     calcBMI:function(){
         this.bmi = this.mass/(this.height**2);
         return this.bmi;
     }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi > john.bmi?`${mark.firstName} ${mark.lastName}'s BMI(${mark.bmi})is higher than ${john.firstName} ${john.lastName}'s BMI(${john.bmi})`:`${john.firstName}'s BMI(${john.BMI})is higher than ${mark.firstName}'s BMI(${mark.bmi})`);*/

// for(let rep = 1; rep <= 10;rep = rep + 1){
//      console.log("Lifting weights repetition " + rep + " 🏋️‍♂️");
// }

// let thatoArray = [
//      "Thato",
//      "Mamooe",
//      1995,
//      "nutritionist",
//      "Canada",
//      ["Lizzy", "Pattie"],
//      true
// ];

// for( let i = 0; i < thatoArray.length; i++){
//      console.log(thatoArray[i]);
// }

// for (let i = thatoArray.length-1; i >= 0; i--){
//      console.log(i,thatoArray[i]);
// }
// const years = [1994, 1995, 2023];
// const ages = [];
//  for (let i = 0;i < years.length; i++){
//      let age = 2024 - years[i];
//      ages.push(age);
//  }
//  console.log(ages)

//

/*const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = function(bill){
     if( bill >= 50 && bill <= 300){
          return bill*0.15
     }else{
          return bill*0.20
     }
}

 for(let i = 0; i < bills.length; i++){
    totals.push(bills[i]+calcTip(bills[i]));
    tips.push(calcTip(bills[i]));
 }

  const calcAverage = function(arr){
     let sum = 0;
  for (let s = 0; s < arr.length; s++){
       sum = sum + arr[s];
  }
  return sum/arr.length;
  }
  console.log(bills);
  console.log(calcAverage(bills));
  console.log(tips);
  console.log(calcAverage(tips));
  console.log(totals);
  console.log(calcAverage(totals));*/

const x = 45;
