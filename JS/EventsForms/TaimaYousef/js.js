function handleSubmit(e){
    
    e.preventDefault();
    console.log(e)
    const form = e.target;
    const formLength = form.length -1;
    const choosenGender = form[1].value;
    let line = ""; 

    if(choosenGender === "female"){
        line = "ברובה הבאה" ; 
    }
    else{
        line  = "ברוך הבא" ; 
    }
    const age = 2020 - form[3].valueAsDate.getFullYear();
    let result = `שלום ${form[0].value} ${line} מזל טוב ביום הולדתך ה ${age}.`

    const paragraph = document.getElementById('paragraph')
    paragraph.innerText = result;

    document.body.style.backgroundColor = form[2].value;

    // for(let i= 0; i<formLength;i++){
    //     console.log(form[i].name, form[i].type, form[i].value)
    // }
            
}