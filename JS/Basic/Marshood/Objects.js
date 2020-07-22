const tal="TALL";
const a ={ a:1,b:3,c:'tal'} // key:value
const b ={ a:1,b:3,c:tal} // key:value
console.log(a);
console.log(b);

/******/
const a2={ a:1,
    b:2,
    c:'tal',
    add:(a,b)=> a+b //method 
}
console.log(a2.add(2,4));
console.log(a2.toString());
console.log(a.hasOwnProperty('b'));
console.log(a2);

// by ref and by value 
let x=4;
let y=x;
x=2;
console.log(y);

const obj={x:4};
const  obj2=obj;
obj.x=2; 
console.log(obj2); // print 2 becuase obj and obj2 with same location on the memory 
                    // pointer for the same location 



const shirt245={size:'xl',color:'pink',model:'nike',price:5};
const  ShirtShein245=shirt245;
ShirtShein245.price=11;

const shirtFactory245={...shirt245};// {... } deep coping 
console.log(shirtFactory245);
shirtFactory245.price=450;
console.log(shirt245);


const {price}=shirt245;