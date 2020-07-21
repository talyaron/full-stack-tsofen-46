var person1 = {name:'morad' , lastName:'sleman' , age:20};
var person2 = {name: 'mahmoud' , lastName: 'atarya' , age:24};
if(person1.lastName === person2.lastName && person1.age === person2.age){
    console.log("same last name and same age")
}else
if(person1.lastName === person2.lastName && person1.age !== person2.age){
        console.log("same last name only");
}else
if(person1.age === person2.age && person1.lastName !== person2.lastName){
    console.log("same age only");
}else{
    console.log("not the same last name and age");
}