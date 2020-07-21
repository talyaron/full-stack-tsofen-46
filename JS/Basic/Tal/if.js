let x = 55

switch (x) {
    case 80:
        console.log(`Good grade`);
        break;
    case 90:
        console.log(`very good grade`);
        break;
    case 100:
        console.log(`excelent`);
        break;
    default:
        console.log("Din't get it");
}

let y = {
    80:`Good grade`,
    90:`very good grade`,
    100:"Din't get it"
}
console.log(y[x]);

if(x<60){
    var result = "Grade is F";
   
}
console.log(result);

