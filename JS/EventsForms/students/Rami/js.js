function handleSubmit(e){
    e.preventDefault();
    console.log(e)

    const form = e.target;
    const formLength = form.length -1;

    for(let i= 0; i<formLength;i++){
        console.log(form[i].name, form[i].type, form[i].value)
    }

    
    var inputDate = new Date(form[2].valueAsDate)
    var gen = document.getElementById("Gender").value
    if(gen=="Male")
    {
        document.getElementById("con").innerHTML = "Hello, "+form[0].value+"<br> Welcome to Our Team."+ "<br>Your Age is: "+GetAge(inputDate)+"<br> And Your Email is: "+form[3].value
        document.getElementById("con1").style.backgroundColor="lightblue"
        document.getElementById("con").style.backgroundColor="lightblue"
    }
    else{
        if(gen == "Female")
        {
            document.getElementById("con").innerHTML = "Hello, "+form[0].value+"<br> Welcome to Our Team."+ "<br>Your Age is: "+GetAge(inputDate)+"<br> And Your Email is: "+form[3].value
            document.getElementById("con1").style.backgroundColor="pink"
            document.getElementById("con").style.backgroundColor="pink"

        }
    }
}

function GetAge(input)
{
    var today=new Date();
    var birthDate = new Date(input);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}