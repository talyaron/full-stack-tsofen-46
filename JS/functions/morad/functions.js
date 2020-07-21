var arr = [{name : 'aaa' , age : 23} , {name : 'bbb' , age : 25} ];
var newArr = getBelow24(arr);
for(let i = 0 ; i < newArr.length; i++){
    console.log(newArr[i].name);
}
function getBelow24(arr){
    var arr24=[];
    var j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].age < 24)
            {
                arr24.push(arr[i]);
            }
    }
    return arr24;
}