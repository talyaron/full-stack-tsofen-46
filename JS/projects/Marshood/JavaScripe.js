function handleSubmit(e){
    e.preventDefault();
    console.log(e)
    const form = e.target;
    const formLength = form.length -1;

    for(let i= 0; i<formLength;i++){
        console.log(form[i].name, form[i].type, form[i].value)
        
    }
    var today = new Date();
    var inputDate = new Date( form[2].valueAsDate);
    var age = today.getFullYear() - inputDate.getFullYear();
     
    var x = document.getElementById("form1");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      var gen = document.getElementById("Gender").value;

      if(gen==="Female"){
      document.getElementById("P1").innerHTML = "Hello,"+form[0].value +"<br>" + "Wellcome to our Team .<br> " +"<br> your birthday is : " + age + "<br> And Your email : "+form[3].value + "<br> you are a young girl"  
      document.getElementById("con1").style.backgroundColor="hotpink" 
      }else{
        document.getElementById("P1").innerHTML = "Hello,"+form[0].value +"<br>" + "Wellcome to our Team .<br> " +"<br> your birthday is : " + age + "<br> And Your email : "+form[3].value + "<br> Good Booy, Haha"  
         document.getElementById("con1").style.backgroundColor = "lightblue";


    }
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}